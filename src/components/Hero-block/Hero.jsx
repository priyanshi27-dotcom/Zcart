import React from "react";
import Carousel from "../../components/Hero-block/Carousel.jsx";
import Category from "../../components/Hero-block/Category.jsx";
 const Hero = () => {
     return (
         <section className='space'>
             <Carousel />
             <Category />
         </section>
     );
 }
 export default Hero;