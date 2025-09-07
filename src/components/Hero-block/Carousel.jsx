import React , { useContext} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { DataContext } from '../../context/DataContext.jsx';
import style from './Carousel.module.css';
import Anchor from '../linkanchor/Anchor.jsx';
import { useNavigate } from 'react-router-dom';
function Carousel(){
const {data=[], loading} = useContext(DataContext);
const navigate = useNavigate();
if(loading){
    return <div>Loading...</div>
};
const setting={
    dots:false,
    autoplay:false,
    infinite:true,
    slidesToShow:1,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false
}
return(

<div className={style.heroSliderBlock}>
 <div className='container'>
<Slider {...setting}>
   
   {data.map((product) =>(
    <div key={product.id} >
        <div className={style.slideritem}>
        <div className='container-sm'>
            <h1>{product.title}</h1>
            <p className={`lg ${style.content}`}>Everything you need, all in one place — fashion, tech, home, beauty, and beyond.
            Trusted quality, great prices, and fast delivery you can count on.</p>
          <button className='btn' onClick={()=>navigate('/product')} style={{padding:'1.5rem 2rem'}}>Shop Now</button>
        </div>
           <div >
            <img src={product.image} alt={product.title} className={style.image}/>
            </div> 
        </div>
    </div>
 
   ))}

</Slider>

</div>

</div>

)
}
export default Carousel;