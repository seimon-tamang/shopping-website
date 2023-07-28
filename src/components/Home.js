import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import './styles.css'
import Filter from './Filters';

function Home(){

    const {state:{products}} = CartState();
    
    const {productState:{
        sort,byStock,byFastDelivery,
        byRating,searchQuery,
    }, productDispatch} = CartState();

    const transformProducts = () =>{
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort((a,b)=>(
                sort==="lowToHigh" ? a.price-b.price : b.price-a.price
            ))
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter((prod)=>
                    prod.inStock!==0
                );
        }

        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod)=>(
                prod.fastDelivery
            ))
        }

        if(byRating){
            sortedProducts = sortedProducts.filter((prod)=>(prod.ratings>=byRating))
        }

        if(searchQuery){
            sortedProducts = sortedProducts.filter((prod)=>(
                prod.name.toLowerCase().includes(searchQuery)
            ))
        }


        return sortedProducts;
    }
    
    return (
    <div className="home">
        <Filter/>
        <div className="productContainer">
            {
                transformProducts().map((prod)=>{
                    return <SingleProduct prod={prod} id={prod.id}/>
                })
            }
        </div>
    </div>);
}

export default Home;