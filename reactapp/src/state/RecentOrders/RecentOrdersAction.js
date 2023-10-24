import * as ActionTypes from "../actionTypes";





export const saveOrderToDb = (order, userid) => {

  console.log("Items To Be Saved", order);
  return function (dispatch) {
    window.fetch("http://localhost:9000/cart/api/saveorder", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userid: userid, order: order })
    })
      .then(response => response.json())
      .then(userorderresponse => {
        // console.log("response ", userorderresponse);
        //dispatch(loading(false));
      })
      .catch((err) => {
        //dispatch(loading(false));
        console.log("Error While Saving order", err);
      })
  }
}


export const getOrders = (userid) => {

  //using post req to not expose the id in the url (security)
  return function (dispatch) {
    console.log("Get List Of orders");
    window.fetch("http://localhost:9000/cart/api/getorders", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userid })
    })
      .then(response => response.json())
      .then(userorderresponse => {
        // console.log("response - get user order ", userorderresponse);

        dispatch(emptyTheCart()); //remove the duplicacy first empty the cart 

        for (const item of userorderresponse.order) {
          // console.log("item in for of", item);
          let action = addItemToCart(item);
          dispatch(action);
        }

      })
      .catch((err) => {
        console.log("Error While Login", err);
      })
  }
}