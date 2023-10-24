// 11-10-2023 - Recentorder Page 
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

// 16-10-2023 - Reorder Page
// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart

import React, { useEffect, Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

let RecentOrders = (props) => {

  let currDate = Date.now();
  // let day = currDate.getDate();

  return (
    <>
      <h3>Recent Orders</h3>
      {}
    </>
  );
}

export default RecentOrders;