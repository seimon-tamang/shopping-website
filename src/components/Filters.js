import {Button,Form } from "react-bootstrap"
import Rating from './Rating'
import { useState } from "react";
import { CartState } from "../Context";

function Filter(){

    const [rate, setRate] = useState();

    // const {productState:{byStock, byFastDelivery, sort, },  productDispatch } = CartState();

    return <div className="filters">
        <span className="title">Filter Products</span>
        <span>
            <Form.Check
                inline
                label='Ascending'
                name="group1"
                type="radio"
                id={`inline-1`}
            />
        </span>
        <span>
        <Form.Check
                inline
                label='Descending'
                name="group1"
                type="radio"
                id={`inline-2`}
            />
        </span>
        <span>
        <Form.Check
                inline
                label='Include Out of Stock'
                name="group2"
                type="checkbox"
                id={`inline-3`}
            />
        </span>
        <span>
        <Form.Check
                inline
                label='Fast Delivery Only'
                name="group3"
                type="checkbox"
                id={`inline-4`}
            />  
        </span>

        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating rating={rate}  onClick={(i)=>setRate(i+1)} style={{cursor:"pointer"}}/>
        </span>
        <Button  variant="light"> Clear Filter</Button>
          
        
    </div>
}

export default Filter;