import banner from "../assets/banner.jpg"; // or .png, etc.
import React from "react";
const MidBanner =()=>{
    return(
        <section className="midBanner-block space" style={{background:'var(--white)'}}>
            <div className="container">
                <div style={{borderRadius:'10px',height:'550px',backgroundImage:`url(${banner})`,backgroundPosition:'center',backgroundSize:'cover'
                ,backgroundRepeat:'no-repeat',position:'relative',backgroundColor:'var(--transparent)',backgroundColor:'rgba(0,0,0,0.4)' ,backgroundBlendMode:'multiply'}}>
                 <div  className="txt-cntr" style={{position:'absolute',top:'30%',left:'0',right:'0',textAlign:'center'}}>
                    <h1 className="lg"style={{color:'var(--white)'}}>Next-Gen Clothes at Your Fingertips</h1>
                    <p className="lg" style={{color:'var(--white)'}}>Discover the latest Fashion with unbeatable prices 
                        and free shipping on all orders.</p>
                 </div> 
                </div>
            </div>
        </section>
    )
}
export default MidBanner;