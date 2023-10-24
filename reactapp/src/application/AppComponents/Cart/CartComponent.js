// 02-10-2023 - Practice

// Cart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)


import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";
import { saveCartToDb } from "../../../state/Cart/CartAction";

let CartComponent = (props) => {

    let cartList = useSelector((state) => state.cartReducer);//reading cart data from store

    let user = useSelector((state) => state.userReducer.User);

    let recalculate = (cartItems) => {
        let amount = 0,
            count = 0;

        for (let item of cartItems) {
            amount += item.qty * item.price;
            count += item.qty;
        }

        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let dispatchToSaveCart = useDispatch();

    let clickToSaveCart = (cart, userId) => {
        if (!userId) {
            alert("Please sign in to save the cart!!!")
        } else {
            dispatchToSaveCart(saveCartToDb(cart, userId))
        }
    }

    let navigate = useNavigate();

    let func = (evt) => {
        navigate('/checkout');
        evt.preventDefault();
    }

    return (
        <>
            <h1>Cart Component</h1>
            {
                cartList && cartList.length >= 1 ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    {
                                        props.readOnly ? "" : //bydefault false as boolean default is false
                                            <Fragment>
                                                <th>Remove</th>
                                                <th>Edit</th>
                                            </Fragment>
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map(item => {
                                        //return item.name
                                        return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id} />
                                    })
                                }
                            </tbody>
                        </table>

                        <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />

                        {
                            props.readOnly ? <></> :
                                <Fragment>
                                    <button onClick={() => clickToSaveCart(cartList, user._id)} >Save Cart</button>
                                    <button onClick={func} >Go To Checkout</button>
                                </Fragment>
                        }
                    </>
                    :
                    <h2>Please add product to cart</h2>
            }
        </>
    );
}

export default CartComponent;


//add - done
//update - update the quantity
//remove - item from cart
//empty - removing items from cart