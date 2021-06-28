import { toast } from 'react-toastify';
import parse from 'html-react-parser';
import { useAuth } from '../../contexts/authContext';

export default function ChainsmokersInfo({ modalHandler, card, openOrderModal }) {
    const { user } = useAuth();

    const orderModalHandler = () => {
        if (!user) {
            toast.warn("Please login to CachyIo!");
            return
        }

        // if (!user.emailVerified) {
        //     toast.warn("Please verify your email address!");
        //     return
        // }

        openOrderModal();
    }

    return (
        <>
            <h2 className="mainCards-chainsmokers__info_title">{card.title}</h2>
            <div className="mainCards-chainsmokers__info-buttons">
                {card.genres.map(genre => (
                    <button key={genre} className="mainCards-chainsmokers__info-buttons_btn">{genre}</button>
                ))}
            </div>
            <p className="mainCards-chainsmokers__info_subtitle">The Repertoire of <span
                style={{ textDecoration: 'underline' }}>{card.title}</span> includes: </p>
            <div className="mainCards-chainsmokers__info-list">
                {parse(card.iframe)}
            </div>
            <button className="mainCards-chainsmokers__info_modal" onClick={modalHandler}>Show more Songs</button>
            <button className="mainCards-chainsmokers__info_button" onClick={orderModalHandler}>Book Now</button>
        </>
    )
}