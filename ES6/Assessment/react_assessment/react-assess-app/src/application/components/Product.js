import React from "react";
import { useParams } from "react-router-dom";

let Product = () => {

  let params = useParams();

  let ProductName = params["productName"] ? params["productName"]: "";
  let ProductPrice = params["productPrice"] ? params["productPrice"]: "";

  return(
    <>  
      <h3>Product Component</h3>
      <div>
        <p>Product Name: {ProductName}</p>
        <p>Product Price: {ProductPrice}</p>
      </div>
    </>
  );
};


export default Product;