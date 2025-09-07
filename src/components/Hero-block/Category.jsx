import React , {useContext}from "react";
import Slider from "react-slick";
import styles from './category.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anchor from "../linkanchor/Anchor";
import { DataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";


const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    const {OnlyUniqueCategory=[]}=useContext(DataContext);
    const Navigate = useNavigate();
    
    return (
        <div style={{background:'var(--black)'}} className={styles.category}>
        <Slider {...settings}>
            {OnlyUniqueCategory.map((item, index) =>(
             <div className="container">
             <div  className="flex sp-evenly" >
            <div key={index} className="carousel-item" style={{padding:'4rem 0',textAlign:'center'}}>
            <button className="btn" style={{background:'var(--blue)',padding:'1.5rem 2rem',textTransform:'uppercase'}} onClick={()=>Navigate(`/categories/${encodeURIComponent(item)}`)}>{item}</button>
            </div>
            </div>
            </div>
            ))}
            
        </Slider>
        </div>
    );
}
export default Category;