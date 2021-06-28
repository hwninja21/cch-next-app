import {useEffect} from "react";
import Aos from "aos";

export default function Song({song}) {
    const linkHandler = (event) => {
        event.stopPropagation()
        window.open(song.link)
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
            className={`mainCards-chainsmokers__info-list-item`}
        >
            <div className={`mainCards-chainsmokers__info-list-item-container`}
                 // onClick={linkHandler}
            >
                {/*<div className="mainCards-chainsmokers__info-list-item-container_overlay">*/}
                {/*    <button className="mainCards-chainsmokers__info-list-item-container_overlay-button">*/}
                {/*        <div className="ellipse">*/}
                {/*            <div className="triangle">*/}
                {/*                <div className="triangle__content"/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className="mainCards-chainsmokers__info-list-item_container">
                    <img src={song.img} className="mainCards-chainsmokers__info-list-item_img"/>
                </div>
            </div>
            <h4 className="mainCards-chainsmokers__info-list-item_title">{song.title}</h4>
        </div>
    )
}