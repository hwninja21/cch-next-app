import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from "next/link";
import Aos from 'aos';
import { useAuth } from '../../contexts/authContext';
import { firebaseClient } from '../../firebase/firebaseClient';

export default function Header({ openModal }) {
    const [active, setActive] = useState(false);
    const [opened, setOpened] = useState(false);
    const { user } = useAuth();
    const router = useRouter();

    const menuToggleHandler = () => {
        if (window.screen.availWidth <= 417) {
            setActive(prev => !prev)
        }
    }

    useEffect(() => {
        Aos.init()
    }, []);

    const signOut = async () => {
        await firebaseClient
            .auth()
            .signOut()
            .then(() => {
                router.push("/");
            });
    }

    return (
        <header
            className="headerCards"
        >
            <div className="container">
                <nav
                    className="headerCards__nav"
                >
                    <h1 className="headerCards__nav_title">
                        <Link href={'/'}>
                            <a className="headerCards__nav_title-link" />
                        </Link>
                    </h1>
                    <ul className={`headerCards__nav-menu ${active ? 'active' : ''}`}>
                        <li className="headerCards__nav-menu_link">
                            <Link href={'/'}>
                                <a className="headerCards__nav-menu_item" onClick={menuToggleHandler}>What is Cachy?</a>
                            </Link>
                        </li>
                        <li className="headerCards__nav-menu_link">
                            <Link href={'/contact-us'}>
                                <a className="headerCards__nav-menu_item" onClick={menuToggleHandler}>Contact Us</a>
                            </Link>
                        </li>
                        {
                            !user &&
                            <>
                                <li className="headerCards__nav-menu_link showMobile">
                                    <a className="headerCards__nav-menu_item" onClick={() => openModal('signup')}>Sign Up</a>
                                </li>
                                <li className="headerCards__nav-menu_link showMobile">
                                    <a className="headerCards__nav-menu_item" onClick={() => openModal('login')}>Log in</a>
                                </li>
                            </>
                        }
                    </ul>
                    <div className={`auth-button-container ${opened ? 'opened' : ''}`}>
                        {
                            user ?
                                <>
                                    <div className="profile-image-wrappper">
                                        <span className="dropdown-button" onClick={() => setOpened(!opened)}>{user.displayName ? user.displayName : 'User'}</span>
                                        <img src={user.photoURL ? user.photoURL : "/images/avatar.jpg"} className="profile-image" alt="Profile" />
                                    </div>
                                    {
                                        router.route === '/profile' ?
                                            <ul className="dropdown dropdown--list">
                                                <li className="dropdown__item">
                                                    <a onClick={signOut}>
                                                        Log out
                                                    </a>
                                                </li>
                                            </ul>
                                            :
                                            <ul className="dropdown dropdown--list">
                                                <li className="dropdown__item">
                                                    <a href="/profile#orders">
                                                        Orders
                                                    </a>
                                                </li>
                                                <li className="dropdown__item">
                                                    <a href="/profile#profileinfo">
                                                        Profile Information
                                                </a>
                                                </li>
                                            </ul>
                                    }
                                </>
                                :
                                <React.Fragment>
                                    <button className="btn btn-signup showDesktop" onClick={() => openModal('signup')}>Sign Up</button>
                                    <button className="btn btn-login showDesktop" onClick={() => openModal('login')}>Log In</button>
                                </React.Fragment>
                        }
                    </div>
                    <button onClick={menuToggleHandler} className="headerCards__nav_menu-button">
                        <span className={`toggle-line ${active ? 'active' : ''}`} />
                    </button>
                </nav>
            </div>
        </header>
    )
}