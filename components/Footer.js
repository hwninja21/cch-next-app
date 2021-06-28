import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__info">
                    <h6 className="footer__title">
                        <Link href={'/'} scroll={false}>
                            <a className="footer__title_link">CACHY</a>
                        </Link>
                    </h6>
                    <p className="footer__subtitle">Cachy by Soundeon OÜ</p>
                </div>

                <ul className="footer__list">
                    <li className="footer__list-item">
                        <Link href={'/terms'} >
                            <a className="footer__list-item_link hovered-text">Terms & Conditions</a>
                        </Link>
                    </li>
                    <li className="footer__list-item">
                        <Link href={'/privacy'}>
                            <a className="footer__list-item_link">Privacy</a>
                        </Link>
                    </li>
                    <li className="footer__list-item"><Link href={'/contact-us'}>
                        <a className="footer__list-item_link">Contact us</a>
                    </Link></li>
                </ul>
            </div>
        </footer>
    )
}
