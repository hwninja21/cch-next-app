import { useEffect } from "react";
import Aos from "aos";

export default function Step({ number, title, subtitle, children }) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="main-singular__list-item__wrapper">
            <div
                data-aos="fade-right"
                data-aos-offset={`${Number.parseInt(number) * 50}`}
                data-aos-delay={`${Number.parseInt(number) * 2 * 100}`}
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="main-singular__list-item"
            >
                <div className="main-singular__list-item__wrapper">
                    <h4 className="main-singular__list-item_number">{number}</h4>
                    <p className="main-singular__list-item_subtitle">{subtitle}</p>

                </div>
                <h5 className="main-singular__list-item_title">{title}</h5>
                {children}
            </div>
        </div>
    )
}