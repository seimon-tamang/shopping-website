import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";
import './styles.css'
import Filter from './Filters';

function Home(){

    const {state:{products}} = CartState();
    console.log(products);
    
    return (
    <div className="home">
        <Filter/>
        <div className="productContainer">
            {
                products.map((prod)=>{
                    return <SingleProduct prod={prod} id={prod.id}/>
                })
            }
        </div>
    </div>);
}

export default Home;