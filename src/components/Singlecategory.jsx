import React, { useContext } from "react";
import styles from './singleCategory.module.css';
import { DataContext } from "../context/DataContext";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import Anchor from "./linkanchor/Anchor";
const SingleCategory = () => {
    const { category } = useParams();
    const { data = [] } = useContext(DataContext);
    const { addToCart } = useContext(CartContext);
    const itemCategory = data.filter(i => i.category === decodeURIComponent(category))
    return (
        <section>
            <div className="container">
                {itemCategory.map((item) => (
                    <div key={item.id} >
                        <div className={styles.itemComponent}>
                            <img src={item.image} alt={item.title} style={{ height: '160px', width: '160px', paddingBottom: '1.6rem', objectFit: 'contain' }} />
                            <div style={{ marginLeft: '2rem' }}>
                                <h3 className=''>{item.title}</h3>
                                <p style={{ padding: '2rem 0', color: 'var(--black)', fontStyle: 'bold' }}>${item.price}</p>
                                <h3 style={{ paddingBottom: '2rem', color: 'var(--black)', fontStyle: 'bold' }}>Rating:<span style={{ color: 'var(--red)' }}>{item.rating.rate}</span></h3>
                                <h3 style={{ paddingBottom: '2rem ', color: 'var(--black)', fontStyle: 'bold' }}>Count:<span style={{ color: 'var(--red)' }}> {item.rating.count}</span></h3>
                                <Anchor name="Add To Cart" size='xlg' height='lg' isRed={true} onClick={() => addToCart(item)} />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}
export default SingleCategory;