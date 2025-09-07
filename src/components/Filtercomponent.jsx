import React from "react";
import { useContext ,useState} from "react";
import { DataContext } from "../context/DataContext.jsx";
import styles from './filtercomponent.module.css';
import Anchor from "./linkanchor/Anchor.jsx";


const Filtercomponent=({searchTerm,setSearchTerm,category,setCategory,
    priceRange,setPriceRange,handleReset,isOpen,toggleOpen,close}) =>{
    const {OnlyUniqueCategory=[],data=[]} = useContext(DataContext);
    
    return(
        <div className={styles.filtercomponent} >
            {isOpen&&<span style={{fontSize:'3rem', float:'right'}} onClick={toggleOpen}>X</span>}
            <input type="text" placeholder="Search products..." value={searchTerm} className={styles.search} onChange={(e)=>setSearchTerm(e.target.value)} 
            />
            <div>
                <h3 className="lg" style={{padding:'2rem 0'}}>Category</h3>
                {OnlyUniqueCategory.map((item,index) =>(
                    <div key={index} className="category-item">
                        <input type="checkbox" onClick={close}name={item} value={item} checked={category === item} onChange={(e)=>setCategory(e.target.value)} />
                        <label className={styles.formlabel}>{item}</label>
                    </div>
                ))}
                <label htmlFor=""className={styles.formlabel} style={{padding:'3rem 0'}}>Price Range:${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min={0} max={1000} className={styles.range}  value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}/>
                <Anchor name="Reset Filter" size='xlg' height='lg' isRed={true} onClick={handleReset}/>
            </div>
        </div>
    )
}
export default Filtercomponent;
