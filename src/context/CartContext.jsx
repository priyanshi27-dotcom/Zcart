import React from "react";
import { createContext,useState } from "react";
export const CartContext = createContext();
const CartProvider =({children})=>{
    const[cartItem,setCartItem]=useState([]);
    const addToCart=(item)=>{
        const ItemInCart = cartItem.find((product)=> product.id == item.id);
        if(ItemInCart){
            const UpdateCart= cartItem.map((product)=>
            product.id == item.id ?{...product,quantity: product.quantity + 1}:product);
            setCartItem(UpdateCart);
        }else{
            setCartItem([...cartItem,{...item,quantity:1}]);
        }
       
    }
    const Updatequantity =(product,action)=>{
        const UpdateCart=cartItem.map(item=>{
            if(item.id == product.id){
                let newUnit = item.quantity;
                if(action === 'increase'){
                    newUnit = newUnit+1;
                }else if(action === 'decrease'){
                 newUnit = newUnit-1
                }
                return newUnit > 0?{...item, quantity:newUnit}:null
            }
            return item;
        }).filter(Boolean);
        setCartItem( UpdateCart);
    }
   
    return(
    <CartContext.Provider value={{cartItem,addToCart,Updatequantity,setCartItem}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartProvider;
