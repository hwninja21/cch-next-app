import Card from "./Card";
import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";

export default function Explore({ cards }) {
    const listRef = useRef(null)
    const [active, setActive] = useState(false)
    const openHandler = (event) => {
        setActive(prevState => !prevState)
        listRef.current.classList.toggle('active')
        if (!active) {
            event.target.scrollIntoView(false)
        } else {
            listRef.current.scrollIntoView()
        }
    }
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section className="main-explore container pb-120">
            <a name="explore" />
            <h3 className="main-explore__title">Browse Available Artists For Your Cachy Performance:</h3>
            <div ref={listRef} className="main-explore__list">
                {cards.map((card, index) => {
                    return index < 2 ?
                        <Card card={card} key={card.id} /> :
                        <Card card={card} activeState={active} key={card.id} />
                })}
            </div>
            <button onClick={openHandler} className="main-explore__button hovered-btn">
                Show {active ? 'less' : 'more'} artists
            </button>
        </section>
    )
}
