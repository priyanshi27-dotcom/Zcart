import {React} from "react";
import style from './about.module.css';
const About=()=>{
    return(
        <section style={{background:'var(--lightgrey)',padding:'5rem 0rem'}}> 
        <div className="container" >
            <div className={style.about} >
                <h2 className="txt-cntr "style={{marginBottom:'3rem'}}>About Zcart</h2>
                <p className={`lg ${style.abouttxt}`}>Welcome to <span style={{color:'var(--black)',fontWeight:'400'}}>Zcart</span>, your number one source for all things fashion. We're dedicated to giving you the very best of clothing, with a focus on dependability, customer service and uniqueness.
                    Founded in 2023 by Zainab, <span style={{color:'var(--black)',fontWeight:'400'}}>Zcart</span> has come a long way from its beginnings in a home office. When Zainab first started out, her passion for eco-friendly products drove her to start her own business.
                    We now serve customers all over the world and are thrilled to be a part of the eco-friendly wing of the fashion industry.
                </p>
                <h3 className={`xlg ${style.heading}`}>Our Mission</h3>
                <p className={`lg ${style.abouttxt}`}>Our mission is to provide high-quality, sustainable fashion choices that empower individuals to express their unique style while minimizing environmental impact. We believe in transparency, ethical sourcing, and fostering a community that values conscious consumption.</p>
                <h3 className={`xlg ${style.heading}`}>Why Choose ZCART ?</h3>
                <p className={`lg ${style.abouttxt}`}>At Zcart, we prioritize quality and sustainability. Our products are carefully curated to ensure they meet our high standards for craftsmanship and environmental responsibility. We work closely with ethical suppliers and artisans to bring you unique pieces that you can feel good about wearing.</p>
                <h3 className={`xlg ${style.heading}`}>Our Vision</h3>
                <p className={`lg ${style.abouttxt}`}>We envision a world where fashion is not only a means of self-expression but also a force for positive change. Our goal is to lead the way in sustainable fashion, inspiring others to make mindful choices that benefit both people and the planet.</p>
                <div className="txt-cntr">
                    <h3 className={`xlg ${style.heading}`}>Join ZCART family</h3>
                    <p className={`lg ${style.abouttxt}`}>We invite you to explore our collection and join us on this journey towards a more sustainable and stylish future. Thank you for choosing Zcart, where fashion meets conscience.</p>
                    <button className="btn" style={{padding:'1.2rem 3rem',fontSize:'1.6rem',borderRadius:'8px',backgroundColor:'var(--grey)',color:'var(--white)',border:'none',cursor:'pointer'}}>Start Shopping</button>
                </div>
            </div>
        </div>
        </section>
    )
}
export default About;