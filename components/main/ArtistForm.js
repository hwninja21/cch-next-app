import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from '../../contexts/authContext';
import { firebaseClient } from '../../firebase/firebaseClient';
import { homeURL, apiURL, STRIPE_API_KEY } from '../../config';

const ArtistForm = forwardRef(({ card, openModal }, ref) => {
  const { id, title, genres, poster, price, covers, flowplayerurl, mainImage } = card;
  const { user } = useAuth();
  const stripePromise = loadStripe(STRIPE_API_KEY);

  const [state, setState] = useState({
    userEmail: '',
    forwhom: '',
    from: '',
    to: '',
    song: '',
    occasion: '',
    instructions: '',
  });

  // console.log(card, '== this is card')

  const getMyCachy = async e => {
    e.preventDefault();

    const { userEmail, forwhom, from, to, song, occasion, instructions } = state;

    if (!forwhom || !from || !to || !song || !occasion) {
      toast.warn("Please fill required fields!");
      return
    }

    if (!user) {
      let modalStat = 'login';
      // check if userEmail exists
      if (!userEmail) {
        toast.warn("Enter Email address!");
        return
      }

      const reg = /^(([^<>()[\]\\.,;:\s@"]+(.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!reg.test(userEmail)) {
        toast.warn("Invalid Email format!");
        return;
      }

      // check if userEmail already registered.
      const signinMethod = await firebaseClient.auth().fetchSignInMethodsForEmail(userEmail);

      if (signinMethod.length === 0) {
        modalStat = 'signup'
      }

      // open login modal send userEmail to login modal
      openModal(modalStat, ref, userEmail);

      // tracking login reqeust
      // const login = await checkLogin();
    } else {
      ref.current.makePayment()
    }
  }



  useImperativeHandle(ref, () => ({
    makePayment: async function () {
      const { userEmail, forwhom, from, to, song, occasion, instructions } = state;
      const { email, uid } = user;
      const stripe = await stripePromise;

      // implement stripe payment 
      const response = await axios.post(`${apiURL}/checkout`, {
        cancel_url: `${homeURL}?canceld=true`,
        mode: 'payment',
        payment_method_types: ['card'],
        success_url: `${homeURL}/profile?success=true`,
        customer_email: email,
        metadata: {
          uid,
          title,
          forwhom,
          from,
          to,
          song,
          occasion,
          instructions,
          price,
          orderImage: poster.url
        },
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: title,
                images: [poster.url],
              },
              unit_amount: price * 100,
            },
            quantity: 1,
          },
        ],
      });

      const session = response.data;

      localStorage.setItem('sessionid', session.id);

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        toast.error(result.error.message)
      }
    }

  }));

  return (
    <div className="artist-form__container container">
      <h1 className="title">
        {card.title}
      </h1>
      <div className="artist-form">
        <form>
          <div className="row">
            <div className="form-group">
              <label htmlFor="forwhom">Who is this for*</label>
              <select name="" id="forwhom" onChange={(e) => setState({ ...state, forwhom: e.target.value })}>
                <option value="">-- Select --</option>
                <option>Myself</option>
                <option>Someone else</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="from">From*</label>
              <input type="text" id="from" onChange={(e) => setState({ ...state, from: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="choosesong">Choose a song*</label>
              <select name="" id="choosesong" onChange={(e) => setState({ ...state, song: e.target.value })}>
                <option value="">-- Select a song --</option>
                {card.covers && card.covers.length > 0 &&
                  card.covers.map((song, index) => <option key={index}>{song}</option>)
                }
              </select>
              <a href="#">Which songs can I choose?</a>
            </div>
            <div className="form-group">
              <label htmlFor="to">To*</label>
              <input type="text" id="to" onChange={(e) => setState({ ...state, to: e.target.value })} />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              {
                !user &&
                <>
                  < label htmlFor="email">Your Email*</label>
                  <input type="text" id="email" style={{ marginBottom: 10 }} onChange={(e) => setState({ ...state, userEmail: e.target.value })} />
                </>
              }
              <label htmlFor="email">Select an occasion*</label>
              <select name="" id="occasion" className="form-control" onChange={(e) => setState({ ...state, occasion: e.target.value })}>
                <option value="">-- Select a occasion --</option>
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Gift</option>
                <option>Anniversary</option>
                <option>Give Thanks</option>
                <option>Another</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="instructions">Provide Instructions</label>
              <textarea name="" id="instructions" rows="6" onChange={(e) => setState({ ...state, instructions: e.target.value })}></textarea>
            </div>
          </div>
          <div className="button-wrapper">
            <div className="artist-form-homepage-btn-form">
              <div>
                <button className="main-btn centralized" type="button" onClick={e => getMyCachy(e)}>Get My Cachy
                  <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.561 10.0492C17.2904 10.0652 17.0625 10.1775 16.8765 10.386C16.6906 10.595 16.6058 10.8343 16.6218 11.1035L16.74 13.0945C16.8539 15.0129 16.2674 16.6944 14.9812 18.1388C13.6946 19.5831 12.0895 20.3624 10.166 20.4766C8.24216 20.5908 6.55603 20.0069 5.10793 18.7249C3.65954 17.4429 2.87854 15.8426 2.76464 13.9241L2.64646 11.9335C2.63048 11.6643 2.51768 11.437 2.30864 11.2511C2.09937 11.0661 1.8594 10.9816 1.58912 10.9977C1.31856 11.0137 1.09027 11.126 0.90469 11.3345C0.718762 11.5435 0.633991 11.7828 0.649973 12.052L0.768152 14.0427C0.904193 16.3342 1.78899 18.2817 3.42377 19.8856C5.05796 21.4901 7.0109 22.3497 9.28215 22.4639L9.40405 24.5172L5.41112 24.7542C5.14055 24.7703 4.91223 24.882 4.72664 25.091C4.54072 25.2995 4.4559 25.5387 4.47192 25.8085C4.4879 26.0777 4.60042 26.3049 4.80974 26.4908C5.01873 26.6759 5.25865 26.7604 5.52926 26.7443L15.5117 26.1517C15.782 26.1356 16.0102 26.0234 16.1961 25.8149C16.3817 25.6059 16.4668 25.3665 16.4508 25.0973C16.4348 24.8276 16.322 24.6003 16.113 24.415C15.9037 24.2294 15.6638 24.1455 15.3935 24.1616L11.4006 24.3986L11.2787 22.3454C13.5202 21.9629 15.3573 20.8784 16.7909 19.092C18.2238 17.306 18.8726 15.2675 18.7365 12.9759L18.6183 10.9853C18.6024 10.7161 18.4895 10.4888 18.2805 10.3029C18.071 10.1179 17.8313 10.0331 17.561 10.0492Z" fill="white" />
                    <path d="M7.20685 10.3988L4.56822 10.5555L4.67658 12.3808L7.31521 12.2242C7.71831 12.2002 8.06425 12.5065 8.08811 12.9084C8.11197 13.3103 7.8047 13.6554 7.4016 13.6793L4.76445 13.8359C4.85221 15.1908 5.40865 16.3236 6.43596 17.2332C7.47107 18.1501 8.67536 18.5669 10.0478 18.4854C11.4203 18.4039 12.5665 17.8476 13.4861 16.8146C14.3983 15.7899 14.8171 14.5992 14.7439 13.2434L12.1987 13.3945C11.7956 13.4185 11.4496 13.1122 11.4258 12.7103C11.4019 12.3083 11.7092 11.9633 12.1123 11.9394L14.659 11.7882L14.5506 9.96286L12.004 10.114C11.6008 10.138 11.2549 9.83167 11.231 9.42979C11.2072 9.02791 11.5144 8.68282 11.9176 8.65888L14.4642 8.5077L14.349 6.56768L11.8024 6.71886C11.3993 6.7428 11.0533 6.43649 11.0295 6.03461C11.0056 5.63273 11.3129 5.28764 11.716 5.2637L14.2566 5.11288C14.1468 3.80605 13.5959 2.70817 12.5964 1.82238C11.561 0.906077 10.357 0.488647 8.98449 0.570127C7.61179 0.65162 6.46559 1.20858 5.5462 2.24093C4.65817 3.23873 4.24139 4.39405 4.28699 5.70474L6.91947 5.54846C7.32257 5.52453 7.66851 5.83079 7.69237 6.23272C7.71623 6.63465 7.40896 6.97969 7.00586 7.00362L4.36723 7.16027L4.4824 9.10029L7.12103 8.94364C7.52414 8.91971 7.87007 9.22597 7.89393 9.6279C7.91779 10.0298 7.60995 10.3749 7.20685 10.3988Z" fill="white" />
                  </svg>
                </button>
              </div>
              <div className="artist-form-homepage-btn-form-price">
                <h3>For {price} USD</h3>
              </div>
            </div>
            <p>By clicking the «Submit» button, I agree to the <a>personal data processing policy</a></p>
          </div>
        </form>
      </div>
    </div >
  )
})

export default ArtistForm;
