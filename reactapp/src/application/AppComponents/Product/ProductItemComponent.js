import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../../state/Cart/CartAction";


let ProductItemComponent = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)
    let dispatchToAddProduct = useDispatch();

    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart(product))
    }

    return(
        <ul className="product">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 

                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                </ul>
                : 
                " "} 
            </li>
        </ul>
    )

}

export default ProductItemComponent;