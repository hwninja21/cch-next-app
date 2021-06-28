import Link from "next/link";

export default function Modal({ songsModal, modal, modalHandler, title }) {

    const { covers } = songsModal
    if (!covers || !covers.length) {
        return (
            <div className={`modal ${modal ? 'active' : ''}`} onClick={modalHandler}>
                <div className={`modal__body`}>
                    <div className={`modal__content`}>
                        <div className={`modal__content_body`}>
                            <h4 ref={title} className="modal__content_no-songs">No songs!</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`modal ${modal ? 'active' : ''}`} onClick={modalHandler}>
            <div className={`modal__body`}>
                <div className={`modal__content`}>
                    <div className={`modal__content_body`}>
                        <h3 ref={title} className={'modal__content_ref'} />
                        {covers && covers.length > 0 ?
                            (<>
                                <div className="modal__content_covers">
                                    {covers.map((cover, i) => (
                                        <p key={i} className="modal__content_covers-item">
                                            <a className="modal__content_covers-link">{cover}</a>
                                        </p>
                                    ))}
                                </div>
                            </>) : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}