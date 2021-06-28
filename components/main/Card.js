import Aos from "aos";
import { useEffect } from "react";
import Link from "next/link";

export default function Card({ card, activeState }) {
    const { genres: button, mainImage: { url: img }, title, id } = card
    let classDefault = 'main-explore__list-item';
    if (!activeState && activeState !== undefined) {
        classDefault += ' hidden'
    }
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div
            data-aos="fade-in"
            data-aos-offset={`50`}
            data-aos-delay={`50`}
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className={classDefault}
        >
            {
                button &&
                <button className="main-explore__list-item_button">{button.join(', ')}</button>
            }
            <Link href={`/cards/[id]`} as={`/cards/${id}`}>
                <a>
                    <div className="main-explore__list-item_container">
                        <img
                            src={img}
                            className="main-explore__list-item_img"
                        />
                    </div>
                </a>
            </Link>
            <Link href={`/cards/[id]`} as={`/cards/${id}`}>
                <h4 className="main-explore__list-item_title"><a>{title}</a></h4>
            </Link>
        </div>
    )
}