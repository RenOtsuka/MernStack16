import React from "react";
import { useParams } from "react-router-dom";

let Product = () => {

  let params =  useParams();
  let ProductName = params["name"] ? params["name"] : "N/A";
  let ProductPrice = params["price"] ? params["price"] : "N/A";

  return(
    <> 
    <br></br>
        <h3>Product Component</h3>
        <p>Product Name: {ProductName}</p>
        <p>Product Price: {ProductPrice}</p>
    </>
  );
};


export default Product;