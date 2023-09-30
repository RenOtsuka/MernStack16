import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddProductToStore = (newProduct)=>{
    return {
        type : ActionTypes.AddProductToStore,
        payload : newProduct
    }
}

export const saveProductToDb = (product)=>{
    return (dispatch)=>{

        console.log("called by dispatch and synced by thunk");

        axios.post("http://localhost:9000/product/api/addProduct", product)
        .then((savedProduct)=>{
            let signdProduct = savedProduct.data;
            console.log(signdProduct)

            dispatch(AddProductToStore(signdProduct))
         })
        .catch((err)=>{
            console.log(err)
        });
    }
}