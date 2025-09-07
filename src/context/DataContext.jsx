import { createContext,useState,useEffect} from "react";
import axios from "axios";
export const DataContext = createContext(null);
const DataProvider = ({children}) => {
const[data,setData] = useState([]);
const[loading,setLoading] = useState(true);
  
    const fetchData= async () => {
try{
    const response=await axios.get('https://fakestoreapi.com/products')
    setData(response.data);
    console.log(response);
}catch(error){
    console.error("Error fetching data:", error);
  
}finally{
    setLoading(false);
  }
 }
useEffect(() => {
    fetchData();
}, []);
const OnlyUniqueCategory = ['all',...new Set(data.map(item => item.category))];

return (
    <DataContext.Provider value={{data,loading,OnlyUniqueCategory}}>
        {children}
    </DataContext.Provider>
)
}
export default DataProvider;
