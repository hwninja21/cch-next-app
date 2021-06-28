import Step from "./Step";
import { useEffect } from "react";
import Aos from "aos";

export default function Singular() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section className="main-singular container pb-120">
            <a name={'cachy'} />
            <h3
                data-aos="fade-right"
                data-aos-offset={`50`}
                data-aos-delay={`50`}
                data-aos-duration="1000"
                data-aos-easing="ease"
                className="main-singular__title">How to Use CACHY?
            </h3>
            <p
                data-aos="fade-right"
                data-aos-offset={`100`}
                data-aos-delay={`140`}
                data-aos-duration="1000"
                data-aos-easing="ease"
                className="main-singular__subtitle">CACHY is a growing marketplace of talented musical artists that lets you book personalized video performances with a written message of your choice for your friends or loved ones. Here’s how it works:
            </p>
            <div className="main-singular__list">
                <Step number={'01'} title={'Choose an Artist'} subtitle={'Step1'} />
                <Step number={'02'} title={'Book an artist'} subtitle={'Step2'}>
                    <ul className="main-singular__list-child-list">
                        <li className="main-singular__list-child-list_item">Provide the message you’d like your friend to hear</li>
                        <li className="main-singular__list-child-list_item">e.g.“Happy Birthday Sarah"</li>
                    </ul>
                </Step>
                <Step number={'03'} title={'Receive the video from the artist'} subtitle={'Step3'} />
                <Step number={'04'} title={'Send it to your friend!'} subtitle={'Step4'} />
            </div>
        </section>
    )
}
