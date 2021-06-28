import Chainsmokers from "./Chainsmokers";
import WhatHappens from "./WhatHappens";
import Modal from "./Modal";
import OrderModal from "../../components/cards/OrderModal";
import { useState, useRef } from 'react'

export default function Main({ card }) {
    const { songsModal } = card
    const [modal, setModal] = useState(false);
    const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
    const title = useRef(null)
    
    const modalHandler = (event) => {
        setModal(prev => !prev)
        event.target.scrollIntoView(false)
        title.current.scrollIntoView(false)
        document.querySelector('html').style.overflowY = !modal ? 'hidden' : 'auto'
    }

    const toggleOrderModal = () => {
        setIsOpenOrderModal(!isOpenOrderModal);
    }

    return (
        <main className="mainCards">
            <Modal
                songsModal={songsModal}
                modal={modal}
                modalHandler={modalHandler}
                title={title}
            />

            <OrderModal openModal={toggleOrderModal} isOpen={isOpenOrderModal} card={card} />

            <div className="container">
                <Chainsmokers card={card} modalHandler={modalHandler} openOrderModal={toggleOrderModal} />
                <WhatHappens />
            </div>
        </main>
    )
}