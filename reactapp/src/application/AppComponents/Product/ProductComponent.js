import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveProduct } from "../../../state/Product/ProductAction"; 
import DisplayProduct from "./DisplayProduct";

let ProductComponent = (props) => {

    let defaultProd = useSelector((state)=>state.productReducer.defaultProduct)//mapStateToProps, making subsriber

    //creating states for product component by using default value
    let [name, setName] = useState(defaultProd.name);
    let [price, setPrice] = useState(defaultProd.price);
    let [desc, setDescription] = useState(defaultProd.desc);
    let [rating, setRating] = useState(defaultProd.rating);

    let onTextChange = (evt)=>{
        let classs = evt.target.classList;
        if (classs.contains("name")) {
            setName(evt.target.value)
        }

        evt.preventDefault();
    }

    let dispatchToSave = useDispatch();

    let saveProductClick = (evt)=>{
        let productToBeSaved = {name, price, desc, rating} ;//this makes a product object

        alert("Save Product will be implemented here!! "+ JSON.stringify(productToBeSaved));
        
        dispatchToSave(saveProduct(productToBeSaved)) //action gets dispatched to store (reducer)
        evt.preventDefault();
    }

    return(
        <>
        <h1>Product component</h1>

        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <b>Product Name</b>
                    <input type="text" className="form-control col-md-6 name" value={name} maxLength={25}
                        onChange={onTextChange}
                    />
                </div>
                <div className="col-md-12">
                    <b>Price </b>
                    <input type="number" className="form-control col-md-6" value={price} 
                      placeholder="Product Price"
                      onChange={(evt)=>setPrice(evt.target.value)} />
                </div>
                
                <div className="col-md-12">
                    <b>Description </b>
                <input type="text" className="form-control col-md-6" value={desc} 
                      placeholder="Please Describe the product"
                      onChange={(evt)=>setDescription(evt.target.value)} />
                </div>
                
                <div className="col-md-12">
                    <b>Ratings </b>
                <input type="text" className="form-control col-md-6" value={rating} 
                      placeholder="Ratings"
                      onChange={(evt)=>setRating(evt.target.value)} />
                </div>

                <input type="button" className={"form-control btn btn-primary col-md-3"} 
                    value={"Save Product"} 
                    onClick={saveProductClick}/>
            </div>
        </section>
        <hr/>
        <DisplayProduct />
    </>
    )
}

export default ProductComponent;