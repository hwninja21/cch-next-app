import Step from "./Step";
import {useEffect} from "react";
import Aos from "aos";

export default function WhatHappens() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section className="mainCards-what">
            <h2
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="mainCards-what__title"
            >What happens after my booking?</h2>
            <div className="mainCards-what__list">
                <Step number={'01'} title={'We send you a confirmation & ensure that everything  will go smoothly.'}/>
                <Step number={'02'} title={'We records a video and send you in time.'}/>
                <Step number={'03'} title={'Enjoy the Micro Concert!'}/>
            </div>
        </section>
    )
}