import {useEffect} from "react";
import Aos from "aos";

export default function Step({number, title}) {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div
            data-aos="fade-right"
            data-aos-offset={`${Number.parseInt(number) * 50}`}
            data-aos-delay={`${Number.parseInt(number) * 2 * 100}`}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="mainCards-what__list-item"
        >
            <h4 className="mainCards-what__list-item_number">{number}</h4>
            <h5 className="mainCards-what__list-item_title">{title}</h5>
        </div>
    )
}