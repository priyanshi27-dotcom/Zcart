import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import {CartContext} from '../context/CartContext';
import { useContext } from "react";
import styles from './singleProduct.module.css';
import Notfound from "../assets/notfound.jpg";
const SingleProduct=()=>{
    const {id} = useParams();
    const {data=[]}=useContext(DataContext);
    const{addToCart}=useContext(CartContext);
    const Product= data.find((p)=>p.id === parseInt(id));
    if(!Product){
       return <div className="txt-cntr"><img src={Notfound} alt="not found" style={{width:'300px',margin:'5rem 0'}}/></div>
    }
    return(
        
        <div className="container" style={{margin:'5rem 0'}}>
            <div className={styles.productContent}>
                <div style={{flex:'1'}}>
                    <img src={Product.image} alt={Product.title} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
                </div>
                <div style={{flex:'1',padding:'0 2rem'}}>
                    <h1 className="xl"style={{paddingBottom:'2rem',color:'var(--black)',fontSize:'2rem'}}>{Product.title}</h1>
                    <p className="lg"style={{paddingBottom:'2rem',color:'var(--black)',fontSize:'2rem',fontWeight:'600'}}>${Product.price}</p>
                    <p className="md"style={{paddingBottom:'2rem',color:'var(--grey)',fontSize:'2rem'}}>{Product.description}</p>
                    <button className="btn"onClick={()=>addToCart(Product)} style={{padding:'1.2rem 3rem',fontSize:'1.6rem',borderRadius:'8px',backgroundColor:'var(--grey)',color:'var(--white)',border:'none',cursor:'pointer'}}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
} 
export default SingleProduct;