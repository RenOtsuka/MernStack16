import React from "react";
import { useParams } from "react-router-dom";

let Product = (props) => {

  let params =  useParams();
  let name = params["name"] ? params["name"] : "N/A";
  let price = params["price"] ? params["price"] : "N/A";

  // console.log(name, price);

  return(
    <> 
    <br></br>
        <h3>Product Component</h3>
        <p>Product Name: {name}</p>
        <p>Product Price: {price}</p>
    </>
  );
};


export default Product;