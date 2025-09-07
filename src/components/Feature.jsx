import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import styles from './Feature.module.css';
const Feature = () => {
    return(
       <div className="container">
       <section className="feature-block">
       
          <div className= {styles.featureContent}>
            <div className={styles.featureitem}>
                <div ><FontAwesomeIcon icon={faTruck} style={{fontSize:'32px',padding:'0.4rem 1rem',color:'var(--grey)'}}/></div>
                <div><h3>Free Shipping</h3><p className="sm" style={{color:'var(--grey)'}}>On Order Over $100</p></div>
            </div>
             <div className={styles.featureitem} >
                <div><FontAwesomeIcon icon={faBagShopping} style={{fontSize:'32px',padding:'0.4rem 1rem',color:'var(--grey)'}} /></div>
                <div><h3>Secure Payment</h3><p className="sm" style={{color:'var(--grey)'}}>100% Protected Payment</p></div>
            </div>
             <div className={styles.featureitem} >
                <div><FontAwesomeIcon icon={faRotateLeft} style={{fontSize:'32px',padding:'0.4rem 1rem',color:'var(--grey)'}} /></div>
                <div><h3>Easy Returns</h3><p className="sm" style={{color:'var(--grey)'}}>Easy 30 Day Return </p></div>
            </div>
             <div className={styles.featureitem}>
                <div><FontAwesomeIcon icon={faClock} style={{fontSize:'32px',padding:'0.4rem 1rem',color:'var(--grey)'}}/></div>
                <div><h3>24/7 Support</h3><p className="sm" style={{color:'var(--grey)'}}>Dedicated Support</p></div>
            </div>
          </div>
      
       </section>
         </div>

    )
}
export default Feature;