import {React} from "react";
import Hero from "../../components/Hero-block/Hero.jsx";
import MidBanner from "../../components/MidBanner.jsx";
import Feature from "../../components/Feature.jsx";
import Footer from "../../components/Footer.jsx";
const Home=()=>{
    return(
      <div>
        <Hero />
        <MidBanner/>
        <Feature/>
      </div>
    )
}
export default Home;