import {createContext, useContext} from "react";
import { faker } from '@faker-js/faker';
import { useReducer } from "react";
import { cartReducer, productReducer } from "./CartReducer";
faker.seed(69);
const Cart = createContext();


function Context({children}){

    const products = [...Array(20)].map(()=>({
        id:faker.string.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.image.url(),
        inStock:faker.number.int({min:0, max:8}),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.string.numeric({min:0, max:4}),
    }));

   const[state, dispatch] = useReducer(cartReducer,{
    products:products,
    cart:[]
   });


   const [productState,productDispatch] =useReducer(productReducer,{

    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:""
   });
 

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    );
}

export default Context;

export const CartState = ()=>{
    return useContext(Cart);
}