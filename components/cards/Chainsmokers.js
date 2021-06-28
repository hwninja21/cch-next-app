import { useEffect } from "react";
import ChainsmokersInfo from "./ChainsmokersInfo";
import ChainsmokersVideo from "./ChainsmokersVideo";
import Aos from "aos";

export default function Chainsmokers({ card, modalHandler, openOrderModal }) {
    useEffect(() => {
        Aos.init({
            once: true,
        })
    }, [])
    return (
        <section className="mainCards-chainsmokers">
            <article
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mainCards-chainsmokers__info"
            >
                <ChainsmokersInfo
                    modalHandler={modalHandler}
                    openOrderModal={openOrderModal}
                    card={card}
                />
            </article>
            <article
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mainCards-chainsmokers__video"
            >
                <ChainsmokersVideo flowplayerurl={card.flowplayerurl} />
            </article>
        </section>
    )
}