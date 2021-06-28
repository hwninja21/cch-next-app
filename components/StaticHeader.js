import Link from "next/link";
import {useEffect, useRef} from "react";
import Aos from "aos";

export default function StaticHeader() {
    const menu = useRef(null)
    const menuBtn = useRef(null)
    useEffect(() => {
        Aos.init()
    }, [])
    const menuToggleHandler = () => {
        if (window.screen.availWidth <= 417) {
            menuBtn.current.classList.toggle('active')
            menu.current.classList.toggle('active')
        }
    }
    return (
        <header className="staticHeader">
            <nav className="staticHeader__nav">
                <h1 className="staticHeader__nav_title">
                    <Link href={'/'}>
                        <a className="staticHeader__nav_title-link"/>
                    </Link>
                </h1>
                <ul ref={menu} className="staticHeader__nav-menu">
                    <li className="staticHeader__nav-menu_link">
                        <Link href={'/#cachy'}>
                            <a className="staticHeader__nav-menu_item" onClick={menuToggleHandler}>What is Cachy?</a>
                        </Link>
                    </li>
                    <li className="staticHeader__nav-menu_link">
                        <Link href={'/contact-us'}>
                            <a className="staticHeader__nav-menu_item" onClick={menuToggleHandler}>Contact us</a>
                        </Link>
                    </li>
                </ul>
                <button onClick={menuToggleHandler} className="staticHeader__nav_menu-button">
                    <span ref={menuBtn} className="toggle-line"/>
                </button>
            </nav>
        </header>
    )
}