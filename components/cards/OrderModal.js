import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody } from "reactstrap";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from '../../contexts/authContext';
import { homeURL, apiURL, STRIPE_API_KEY } from '../../config';

function OrderModal({ openModal, isOpen, card }) {
    const {id, title, poster, price, songsModal: { covers: songs } } = card;
    const { user } = useAuth();
    const router = useRouter();
    const stripePromise = loadStripe(STRIPE_API_KEY);

    const cardId = router.query.id;

    const [state, setState] = useState({
        forwhom: '',
        from: '',
        to: '',
        song: '',
        occasion: '',
        instructions: '',
    })

    const getUpdatedSuccessUrl = (url,price,id) => {
        const params = new URLSearchParams(window.location.search)
        for (const param of params) {
            url = `${url}&${param[0]}=${param[1]}`;
        }
        if(price){
            url = `${url}&product_price=${price}`
        }
        if(id){
            url = `${url}&product_id=${id}`
        }
        return url
    }
    const handleSubmit = async e => {
        const { forwhom, from, to, song, occasion, instructions } = state;
        const { email, uid } = user;
        const stripe = await stripePromise;

        e.preventDefault();

        if (!forwhom || !from || !to || !song || !occasion) {
            toast.warn("Please fill required fields!");
            return
        }

        let success_url = `${homeURL}/profile?success=true&purchase=true`;
        let updated_success_url = getUpdatedSuccessUrl(success_url,price,id)
        // implement stripe payment 
        const response = await axios.post(`${apiURL}/checkout`, {
            cancel_url: `${homeURL}/cards/${cardId}?canceld=true`,
            mode: 'payment',
            payment_method_types: ['card'],
            success_url: updated_success_url,
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
                orderImage: poster
            },
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: title,
                            images: [poster],
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

    return (
        <Modal toggle={() => { openModal(!isOpen) }} isOpen={isOpen} className="order-modal">
            <div className="modal-header">
                <button
                    aria-label="Close"
                    className=" close"
                    type="button"
                    onClick={() => { openModal(!isOpen) }}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <ModalBody>
                <div className="orderForm">
                    <h1>{`New request for ${title}`}</h1>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="forwhom">* Who is this for</label>
                            <select name="" id="forwhom" className="form-control" onChange={(e) => setState({ ...state, forwhom: e.target.value })}>
                                <option value="">-- Select --</option>
                                <option>Myself</option>
                                <option>Someone else</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="from">* From</label>
                            <input type="text" id="from" className="form-control" placeholder="Enter your name here" onChange={(e) => setState({ ...state, from: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="to">* To</label>
                            <input type="text" id="to" className="form-control" placeholder="Enter a name of addressee" onChange={(e) => setState({ ...state, to: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="occasion">* Choose a song</label>
                            <select name="" id="occasion" className="form-control" onChange={(e) => setState({ ...state, song: e.target.value })}>
                                <option value="">-- Select a song --</option>
                                {
                                    songs && songs.length > 0 &&
                                    songs.map((song, index) => <option key={index}>{song}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="occasion">* Select an occasion</label>
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
                            <label htmlFor="instructions">Provide instructions</label>
                            <textarea name="" id="instructions" rows="3" className="form-control" onChange={(e) => setState({ ...state, instructions: e.target.value })}>
                            </textarea>
                        </div>
                        <div className="submit">
                            <button className="primary" onClick={e => handleSubmit(e)}>Submit</button>
                            <p className="description">After clicking 'Submit' you will be redirected to Stripe to complete your purchase securely.</p>
                        </div>
                    </form>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default OrderModal;
