import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch} from "react-redux";
// import { useNavigate } from "react-router-dom";
// import CartItemComponent from "./CartItemComponent";
// import CartSummaryComponent from "./CartSummaryComponent";
// import { saveCartToDb } from "../../State/CartState/CartActions";

let CartComponent = (props)=> {

    let cartList = useSelector((state)=>state.cartReducer)

    return(
        <>
            <h1>Cart Component</h1>

            {
                cartList && cartList.length >= 1 ? 
                cartList.map((item)=>{
                    return item.name +" " + item.desc
                })
                : 
                <h2>Please add product to cart</h2>
            }

        </>
    )
}

export default CartComponent;