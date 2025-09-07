import { React } from "react"
import Navbar from "./components/navbar/Navbar"
import Home from "./Pages/home/Home"
import About from "./Pages/About/About"
import Product from "./Pages/products/Product"
import Cart from "./Pages/cart/Cart"
import Contact from "./Pages/contact/Contact"
import Footer from "./components/Footer"
import SingleProduct from "./components/SingleProduct"
import "./global.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import SingleCategory from "./components/Singlecategory"
function App() {
  
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  )
}
const AppContent = () => {
  const location = useLocation();
  const ShowFooter = location.pathname === '/contact';
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/products/:id' element={<SingleProduct />} />
         <Route path='/categories/:category' element={<SingleCategory />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/signIn'element={<SignIn/>}></Route> */}
      </Routes>
      {!ShowFooter && <Footer />}
    </>
  )
}

export default App
