// 09-10-2023 - Practice

// Checkout Component
// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)

// Second Task :
// Create a state using useState to show/hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page

import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";
import CartSummary from "../Cart/CartSummary";

let CheckOutComponent = (props) => {

  let cartList = useSelector((state) => state.cartReducer);
  let user = useSelector((state) => state.userReducer.User);
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);

  let recalculate = (cartItems) => {
    let amount = 0,
      count = 0;

    for (let item of cartItems) {
      amount += item.qty * item.price;
      count += item.qty;
    }

    return {
      amount,
      count
    }
  }

  let func = () => {

    setShowPaymentMessage(true);

    setTimeout(() => {
      setShowPaymentMessage(false);
    }, 10000);
  }


  return (
    <>
      {!showPaymentMessage ? (
        <>
          <h1>Checkout Page</h1>
          <h3>User Details</h3>
          <p>User Name: {user.userName}</p>
          <p>Address: {user.street}</p>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Total</th>
                {
                  props.readOnly ? "" : //bydefault false as boolean default is false
                    <Fragment>
                      <th>Remove</th>
                      <th>Edit</th>
                    </Fragment>
                }
              </tr>
            </thead>
            <tbody>
              {
                cartList.map(item => {
                  return <CartItemComponent item={item} readOnly={props.readOnly} key={item._id} />
                })
              }
            </tbody>
          </table>
          <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />
          <button onClick={func}> Make Payment</button>
        </>
      ) : (
        <>
          <h3>Payment Successful</h3>
          <p>Thank you for the payment, your items under process!</p>
        </>
      )}
    </>
  );
}

export default CheckOutComponent;
