import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { CartContext } from '../../context/CartContext';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function Navbar() {
    const { cartItem } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    const close=()=>{
        setIsOpen(false);
    }
    return (
        <header>
            {isOpen && <div className={styles.overlay} onClick={close}></div>}
            <div className=' container'>
                <div className={`flex sp-bw ${styles.siteHeader}`}>
                    <div className={styles.logo}>
                        <Link to='/'><h2><span className={styles.logospan}>Z</span>cart</h2></Link>
                    </div>

                    <nav>
                        <ul className={`flex ${styles.navbar} ${isOpen ? styles.open : ''}`}>
                            <li className={styles.li} onClick={close}>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? styles.active : '')}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className={styles.li} onClick={close}>
                                <NavLink
                                    to="/product"
                                    className={({ isActive }) => (isActive ? styles.active : '')}
                                >
                                    Product
                                </NavLink>
                            </li>

                            <li className={styles.li} onClick={close}>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => (isActive ? styles.active : '')}
                                >
                                    About
                                </NavLink>
                            </li>

                            <li className={styles.li} onClick={close}>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? styles.active : '')}
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li className={`relative ${styles.li}`} onClick={close}>
                                <NavLink to="/cart">
                                    <FontAwesomeIcon icon={faCartArrowDown} style={{ fontSize: '23px' }} />
                                    <span className={styles.count}>{cartItem.length}</span>
                                </NavLink>
                            </li>

                            <li onClick={close}>
                                <div>
                                    <SignedOut>
                                        <SignInButton className={styles.signIn} />
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton />
                                    </SignedIn>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div onClick={toggleOpen} className={styles.icon}><FontAwesomeIcon icon={isOpen ? faXmark : faBars} /></div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;