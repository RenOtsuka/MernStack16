//this defines all the actions raised for user state like - adduserToStore, signinupUser, etc
import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddHobbyToStore = (newhobby) => {
  return {
    type: ActionTypes.AddHobbyToStore,
    payload: newhobby
  }
}

export const saveHobbyToDb = (hobby) => {
  return function (dispatch) {
    //dispatch(loading(true));

    window.fetch("http://localhost:9000/hobby/api/savehobby", {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hobby)
    })
    .then(r => r.json())
    .then((hobbyresp) => {
         console.log("hobby save response ", hobbyresp);
        //dispatch(loading(false));
        dispatch(fetchProducts());//fetched at the time of save it self
    })
    .catch((err) => {
        console.log("Error While Saving hobby", err)
    });
}
}

export const fetchProducts = () => {
  console.log("Product ");

  return function (dispatch) {
      //dispatch(loading(true));

      window.fetch("http://localhost:9000/product/api/getproducts", {
          method: 'GET' //rest method type             
      })
      .then(productresp => productresp.json())
      .then((productresp) => {
          console.log("get products response ", productresp);
          //dispatch(loading(false));
          dispatch(addProduct(productresp))
      })
      .catch((err) => {
           console.log("Error While Saving Product", err)
      });
  };
};