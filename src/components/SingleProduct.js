import {Card,Button} from 'react-bootstrap';
import Rating from './Rating'
import { CartState } from '../Context';


function SingleProduct({prod}){
 
    const {
        state:{cart},
        dispatch,
    } = CartState()

 

    return <div className="products">
                <Card>
                    <Card.Img variant="top" src={prod.image} alt={prod.name}/>
                    <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Subtitle style={{paddingBotton: 10}}>
                            <span>
                             Rs. {
                                      prod.price.split(".")[0]
                              }
                            </span>
                             {
                                prod.fastDelivery ?(
                                     <div>Fast Delivery</div>
                                ):(
                                    <div>Delivery Time: minm 4 Days</div>
                                )
                            }
                            <Rating rating={prod.ratings}/>
                        </Card.Subtitle>
                        {
                            cart.some((p)=>p.id === prod.id)?(
                                <Button 
                                    variant="danger"
                                    onClick={
                                        ()=>(
                                            dispatch({
                                                type:"REMOVE_FROM_CART",
                                                payload:prod                                
                                            })  
                                        )}
                                > Remove from Cart 
                                </Button>
                            ):(
                                <Button onClick={
                                    ()=>(
                                        dispatch({
                                            type:"ADD_TO_CART",
                                            payload:prod
                                        })
                                     )
                                  }
                                disabled={!prod.inStock}>
                                {!prod.inStock? "Out of Stock":"Add to Cart"}
                                </Button>
                            )  
                        } 
                    </Card.Body>
                </Card>
            </div>
};

export default SingleProduct;