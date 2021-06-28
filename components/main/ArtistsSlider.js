import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ArtistForm from "./ArtistForm";
import Aos from "aos";

function ArtistsSlider({ cards, openModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const formRef = useRef(null);
  const nextSlide = (currentSlide + 10) % 9;
  const prevSlide = (currentSlide + 8) % 9;

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "15%",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <SampleNextArrow type={cards[nextSlide].genres[0]} />,
    prevArrow: <SamplePrevArrow type={cards[prevSlide].genres[0]} />,
    afterChange: current => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false
        }
      }
    ]
  };

  useEffect(() => {
    Aos.init()
  }, []);

  return (
    <section className="artists-slider pb-120">
      <a name="artists"></a>
      <h3
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="title container"
      >Check Out A CACHY Performance In Action:</h3>
      <div className="video-slider">
        <Slider {...settings}>
          {
            cards && cards.length > 0 &&
            cards.map((card, i) => (
              <div key={i}>
                <div
                  className="flowplayer-embed-container"
                  style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 15 }}
                    allowFullScreen
                    src={card.flowplayerurl}
                    title="0"
                    byline="0"
                    portrait="0"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allow="autoplay"
                    loading="lazy"
                  ></iframe>
                  <div className="video-overlay"></div>
                </div>
              </div>
            ))
          }
        </Slider>
        <div className="slide-info">
          <p className="music-type">{cards[currentSlide].genres[0]}</p>
          <p className="artist">{cards[currentSlide].title}</p>
        </div>
      </div>
      <ArtistForm card={cards[currentSlide]} openModal={openModal} ref={formRef} />
    </section>
  )
}

function SampleNextArrow(props) {
  const { className, onClick, type } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <span>{type}</span>
      <svg width="27" height="51" viewBox="0 0 27 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 50L25.5 25.5L0.999996 1" stroke="#320325" strokeWidth="2" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, type, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg width="28" height="51" viewBox="0 0 28 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.5 1L2 25.5L26.5 50" stroke="#320325" strokeWidth="2" />
      </svg>
      <span>{type}</span>
    </div>
  );
}

export default ArtistsSlider;