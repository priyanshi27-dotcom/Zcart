import React from 'react';
import styles from './Footer.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faSquareTwitter} from '@fortawesome/free-brands-svg-icons';
import {faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons';

const Footer=()=>{
    return(
        <footer style={{background:'var(--blue)',color:'var(--white)'}}>
            <div className='container' >
            <div className={styles.footercontent} style={{padding:'3rem 0'}} >
                <div className={styles.footerItem}>
                    <h3 className='lg' style={{color:'var(--red)'}}>Zcart</h3>
                    <h4  style={{paddingTop:'0.8rem'}}>Powering Your World with the Best in Electronics.</h4>
                    <ul >
                        <li className='sm'>123 Electronics St, IT Park, Chandigarh</li>
                        <li className='sm'>Email: support@Zcart.com</li>
                        <li className='sm'>Phone: (123) 456-7890</li>
                    </ul>
                </div>
                <div className={styles.footerItem}>   
                    <h3 class='lg'>Customer Service</h3>
                    <ul >
                        <li className='sm'>Contact Us</li>
                        <li className='sm'>Shipping & Returns</li>
                        <li className='sm'>FAQs</li>
                        <li className='sm'>Order Tracking</li>
                        <li className='sm'>Size Guide</li>
                    </ul>
                </div>
                <div className={styles.footerItem}>
                    <h3 className='lg'>Follow Us</h3>
                    <ul className={styles.footerlist}>
                        <li className='sm'><FontAwesomeIcon icon={faFacebook} style={{fontSize:'22px', color:'var(--white)', paddingRight:'0.3rem'}} /></li>
                        <li className='sm'><FontAwesomeIcon icon={faSquareTwitter} style={{fontSize:'22px', color:'var(--white)', paddingRight:'0.3rem'}} /></li>
                        <li className='sm'><FontAwesomeIcon icon={faSkype} style={{fontSize:'22px', color:'var(--white) ',paddingRight:'0.3rem'}} /></li>
                        <li className='sm'><FontAwesomeIcon icon={faSquareInstagram} style={{fontSize:'22px', color:'var(--white)', paddingRight:'0.3rem'}} /></li>
                    </ul>
                </div>
                <div >
                    <h3 className='lg'>Stay In The Loop</h3>
                    <h4 style={{paddingTop:'0.8rem'}}>Subscribe to get special offers, free giveaways, and more</h4>
                    <input type="email" placeholder="Enter your email" className={styles.email}  /><button className={styles.footerbutton}>Subscribe</button>
                </div>
            </div>
            </div>
            <div><p style={{padding:'2.5rem 0', borderTop:'1px solid var(--white)'}} className='txt-cntr sm'>© 2025 Zaptro. All rights reserved</p></div>
        </footer>
    )
}
export default Footer;
