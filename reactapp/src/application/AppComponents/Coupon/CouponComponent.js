// 10-10-2023 - Practice

// Coupon Page 
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload


// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users can insert the products to database 

import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCouponToStore } from "../../../state/Coupon/CouponAction";

let CouponPage = (props) => {

  let coupon = useSelector((state) => state.couponReducer.Coupon);
  let [couponState, setCouponState] = useState(coupon);
  let dispatchCoupon = useDispatch();
  

  let genCoupon = () => {
    let val = (Math.random() * 1000000);
    setCouponState(Math.trunc(val));
    dispatchCoupon(saveCouponToStore(val));
  } 

  let readCoupon = () => {
    console.log(couponState);
  }

  

  return (
    <>
    <h3>Coupon Page</h3>
    <br></br>
     <button onClick={genCoupon}>Generate Coupon</button>
     <button onClick={readCoupon}>Read Coupon</button>
    </>
  );
}

export default CouponPage;