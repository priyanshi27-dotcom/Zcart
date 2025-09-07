import React ,{useContext,useState} from "react";
import { CartContext } from "../../context/CartContext";
import empty from "../../assets/empty.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import styles from'./cart.module.css';

const Cart=()=>{
    const{cartItem,setCartItem,Updatequantity}=useContext(CartContext);
    const TotalPrice =cartItem.reduce((total, item)=>  total+ item.price * item.quantity , 0);
      const deleteItem=(id)=>{
             const filtercart = cartItem.filter((item)=>item.id !== id)
             setCartItem(filtercart);
         }    
  

   return(
        <section>
            <div className="container">
          {
          cartItem.length > 0 ?
          (
            <div>
            {cartItem.map ((item)=>{
                return(
                 
            <div key={item.id} className={styles.cartitem} >
                <div><img src={item.image} alt={item.title} className={styles.itemimage}/></div>
                <div>
                <h2 className="sm" style={{ marginBottom:'2rem'}}>{item.title}</h2>
                <p className="lg">{`$${item.price}`}</p>
                <p className="lg">quantity:{item.quantity}</p>
                </div>
                 <div  className="flex justify-cntr algn-itm">
                <button className={styles.cartbutton} onClick={()=>Updatequantity(item , 'increase')}><strong>+</strong></button>
                <span onClick={()=>deleteItem(item.id)}><FontAwesomeIcon icon={faTrash} style={{fontSize:'3rem',color:'var(--red)'}}/></span>
                <button className={styles.cartbutton} onClick={()=>Updatequantity(item , 'decrease')}><strong>-</strong></button>
                </div>
            
            </div> 
                      
            )})}
            <div className={styles.billblock}>
                <h3 className="lg" style={{marginBottom:'1.5rem'}}>Bill Details</h3>
                <div className="grid-2" style={{borderBottom:'1.5px solid var(--grey)'}}>
                <ul>
                <li style={{marginBottom:'1.5rem'}}>Items Total</li>
                <li style={{marginBottom:'1.5rem'}}>Delivery Charge</li>
                <li style={{marginBottom:'1.5rem'}}>Handling Charge</li>
                </ul>
                <ul>
                <li style={{marginBottom:'1.5rem',color:'var(--grey)'}}>${TotalPrice}</li>
                <li style={{marginBottom:'1.5rem'}}>Free</li>
                <li style={{marginBottom:'1.5rem'}}>$5</li>
                </ul>
                </div>
                <h3 className="flex sp-bw md" style={{margin:'1.5rem 0'}}><span>Grand total</span>${TotalPrice  + 5} <span></span></h3>
                <p >Apply Promo Code</p>
                <input type="text"className={styles.input} style={{marginBottom:'1.5rem'}}/> <button style={{padding:'1rem 0.5rem'}}>Apply</button><br/>
                <div className="txt-cntr"><button className={styles.cartbutton}>Proceed to Checkout</button></div>
            </div>
            </div>
            
                
    ):(
          
            <div className='txt-cntr'>
                <img alt="YOUR CART IS EMPTY"src={empty}  />
            </div>
          )
          }
          
          </div>
        </section>
    )
}
export default Cart;