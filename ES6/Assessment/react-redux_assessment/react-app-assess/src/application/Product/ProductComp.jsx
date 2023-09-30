import React, {useState} from "react";

import { connect } from "react-redux";
import { AddProductToStore, saveProductToDb } from "../../state/Product/ProductAction";

let ProductComp = (props) => {

  let [name, setName] = useState(props.Product.name);
  let [price, setPrice] = useState(props.Product.price);
  let [desc, setDesc] = useState(props.Product.desc);
  let [rating, setRating] = useState(props.Product.rating);

  let onTextChange = (evt) => {
    let target = evt.target;
    let classList = target.classList;
    let value = target.value;

    if (classList.contains("name")) {
      setName(value);
    } else if (classList.contains("price")) {
      setPrice(value);
    } else if (classList.contains("desc")) {
      setDesc(value);
    } else {
      setRating(value);
    }
  }

  let AddProductFunc = (evt)=>{
    evt.preventDefault();
    props.SaveProduct({
      name,
      price,
      desc,
      rating
    });
  }

  return (
    <>
      <br />
      <h1>Add Product Page</h1>
      <section className={"componentClass"}>
        <div className="form col-md-8">
          <div className="col-md-12">
            <b>Name</b>
            <input type="text" className="form-control col-md-6 name"
            onChange={onTextChange} value={name}
            placeholder="Enter Name of Product" maxLength={20} />

          </div>
          <div className="col-md-12">
            <b>Price</b> 
            <input type="number" className="form-control col-md-6 price" onChange={onTextChange} value={price}
              placeholder="Enter Price" />
          </div>
          <div className="col-md-12">
            <b>Description</b>
            <input type="text" className="form-control col-md-6 desc" onChange={onTextChange} value={desc}
              placeholder="Enter Description" />
          </div>

          <div className="col-md-12">
            <b>Rating </b>
            <input type="number" className="form-control col-md-6 rating" onChange={onTextChange} value={rating}
              placeholder="Enter Rating" />
          </div><br />

          <input type="button" className={"btn btn-primary col-md-2 saveProduct"}
            value={"Add Product"} onClick={AddProductFunc}
          /> 

        </div>
      </section>
    </>
  );
}

//subsciber
let mapstateToProps = (store) => {
  return {
    Product: store.productReducer.Product
  };
}

//publisher
let mapdispatchToProps = (dispatch) => {
  return {
    AddProduct: (newProduct) => { 
      dispatch(AddProductToStore(newProduct));
    },
    SaveProduct : (newProduct)=>{
      dispatch(saveProductToDb(newProduct))
    } 
  }
}

export default connect(mapstateToProps, mapdispatchToProps)(ProductComp)


