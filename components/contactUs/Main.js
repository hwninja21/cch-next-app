import {useEffect} from "react";
import Aos from "aos";

export default function Main() {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <main
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease"
            className="mainContact staticContainer"
        >
            <section className="mainContact__info">
                <h1 className="mainContact__info_title">We’d love to
                    hear from you</h1>
                <p className="mainContact__info_subtitle">
                    <a href="mailto:info@cachy.io" className="mainContact__info_link">info@cachy.io</a>
                </p>
            </section>
        </main>
    )
}