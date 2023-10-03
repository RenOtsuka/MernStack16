import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../../state/Product/ProductAction";
import ProductItemComponent from "./ProductItemComponent";

let DisplayProduct = (props) => {

  let products = useSelector((state) => state.productReducer.products);
  let dispatchToFetchProducts = useDispatch();

  useEffect(() => {
    products && products.length == 0 ? dispatchToFetchProducts(fetchProducts()) : ""
  }, []);

  return (
    <>
      {
        products && products.length >= 1 ?
          products.map((product) => {
            return <ProductItemComponent product={product} />
          })

          : <h2>No Products To Show</h2>
      }
    </>
  )
}

export default DisplayProduct;