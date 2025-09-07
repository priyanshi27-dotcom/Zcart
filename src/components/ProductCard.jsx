import React ,{useContext}from "react";
import Anchor from "./linkanchor/Anchor";
import styles from './ProductCard.module.css';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Productcard = ({item}) => {
  const{ addToCart}=useContext(CartContext);
  const navigate = useNavigate();
        return(
       
        
            <div className={styles.card} >
            <img src={item.image} className={styles.image}alt=
            {item.title} onClick={() => navigate(`/products/${item.id}`)}/>
            <h3 className={styles.ellipsis}>{item.title}</h3>
            <p style={{padding:'2rem 0',color:'var(--black)',fontStyle:'bold'}}>{item.price}</p>
            <Anchor name="Add To Cart" size='xlg'height='lg' isRed={true} onClick={()=> addToCart(item)}/>
          </div>
         


    )
}
export default Productcard;