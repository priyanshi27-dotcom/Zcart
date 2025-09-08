import React from "react";
import { useContext,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter} from '@fortawesome/free-solid-svg-icons';
import { DataContext } from "../../context/DataContext";
import loading from "../../assets/loading.gif";
import FilterSection from "../../components/Filtercomponent";
import Productcard from "../../components/ProductCard";
import styles from './Product.module.css';
const Product=()=>{
  const[searchTerm, setSearchTerm] = useState("");
  const[category, setCategory] = useState('all');
  const[priceRange, setPriceRange] = useState([0, 1000]);
  const[currentPage, setCurrentPage] = useState(1);
  const[isOpen,setIsOpen]=useState(false);
  const toggleOpen=()=>{
        setIsOpen(!isOpen);
    }
    const close=()=>{
        setIsOpen(false);
    }
  const itemsPerPage = 9;
    const{data=[]} = useContext(DataContext);
    const Filterdata= data.filter((item)=>
    
     item.title.toLowerCase().includes(searchTerm.toLowerCase())&&
      (category === "all" || item.category === category) &&
      item.price >= priceRange[0] && item.price <= priceRange[1]
    )
    const totalPages = Math.ceil(Filterdata.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Filterdata.slice(startIndex, endIndex);

    const handleReset = () => {
  setSearchTerm('');
  setCategory('all');
  setPriceRange([0, 1000]);
  console.log("Filters reset to default values.");
};


    return(
        <div>
            <div className="container">
                {
                  data.length > 0 ? (
                    <div>
                   { isOpen ? <div className={styles.overlay} onClick={toggleOpen}></div>:<button onClick={toggleOpen} className={`btn${styles.filterbtn}`}><FontAwesomeIcon icon={faFilter} /></button>}
                    <div className="flex justify-cntr relative" >
                        <div className={`${styles.filtersection} ${isOpen&& styles.open}`}><FilterSection searchTerm={searchTerm} setSearchTerm={setSearchTerm}
                        category={category} setCategory={setCategory} priceRange={priceRange} 
                        setPriceRange={setPriceRange} handleReset={handleReset} isOpen={isOpen} toggleOpen={toggleOpen} close={close}/></div>
                        <div className={styles.product}>
                        {
                            currentItems.map((item,index)=>(
                                    <Productcard key={index} item={item}/>
                                ))
                        }
                        
                       </div> 
                   </div>
                   <div className="pagination flex justify-cntr" style={{margin:'3rem 0 5rem 0'}}>
                            <button className="btn" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                                Prev
                            </button>
                            <span className="page-info" style={{margin:' 1rem',fontSize:'1.7rem'}}>Page {currentPage} of {totalPages}</span>
                            <button className="btn" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                                Next
                            </button>
                        </div>
                    </div>
                  ):(
                    <div className="txt-cntr flex justify-cntr align-cntr">
                       <img src={loading} alt='loading...' style={{width:'300px'}} />
                    </div>
                  )
                }
            </div>
     
        </div>
    )
}
export default Product;