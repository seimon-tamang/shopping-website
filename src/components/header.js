import {Nav, NavLink,Badge, Navbar,Container,FormControl, Dropdown, DropdownButton,Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import {FaShoppingCart} from 'react-icons/fa';
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../Context";

function Header(){

    const {state:{cart},dispatch} = CartState();
    const{productState:{searchQuery},productDispatch} = CartState();

    return(
        <Navbar bg="dark" data-bs-theme="dark" style={{height:80}}>
            <Container> 
                <Navbar.Brand>
                    <a href="/">Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl 
                    className="m-auto" 
                    style={{width:500}} 
                    placeholder="Search a product"
                    onChange={
                        (e)=>{
                            productDispatch({
                                type:"FILTER_BY_SEARCH",
                                payload:e.target.value,
                            });
                        }
                    }
                    />

                </Navbar.Text>

                <Nav>
                    <Dropdown align='end' >   
                        <Dropdown.Toggle variant="secondary" className="cartDown">
                            <FaShoppingCart color="black" fontSize="25px"/>
                            <Badge id="badge" >{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ minWidth:370 }}>
                                { 
                                cart.length>0?(
                                    <div>
                                    {
                                        cart.map((prod)=>(
                                             <span key={prod.id} className="cartitem">
                                                <img 
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>Rs. {prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{cursor:"pointer"}}
                                                    onClick={()=>{
                                                        dispatch({
                                                            type:"REMOVE_FROM_CART",
                                                            payload: prod
                                                        })
                                                    }}
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{width:"95%", margin:"0 10px"}}>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                    </div>
                                    ):(
                                        <span style={{padding:10}}>Cart is Empty</span>
                                    )
                                }
                        </Dropdown.Menu>
                    </Dropdown>  
                </Nav>
            </Container>
        </Navbar>
  
    );
};

export default Header;