// 19-10-2023 - Logout
// LogOut : Set up logout button/link on TopRight corner, upon click user should be cleared and back to home

// 20-10-2023 - Notifications

// Show notification on top of header (Right Corner)
// Design Should show a circular or any small icon, to show number of notifications
// Upon click it should expand in rectangular box and show all the notification messages 
// All notification messages should be clickable
// Upon click of any of them it should reduce the count in notification icon
// It should have two types of notifications - static and dynamic
// Static Notifications To Assist User
// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
// Dynamic Notifications To Assist User
// 1. To Check the number of items added in the Cart
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row

import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

// import Header  from "./CommonComponent/HeaderComponent";
// //import ChildComponent from "./CommonComponent/ChildComponent";
// import Home from "./CommonComponent/HomeComponent";
// import Footer from "./CommonComponent/FooterComponent";
// import About from "./CommonComponent/AboutComponent";
// import NotFound from "./CommonComponent/NotFound";
// //import User from "./AppComponents/User/UserComponent";
// //import User from "./AppComponents/User/UserContainer";
// import UserHook from "./AppComponents/User/UserHook";
// import Product from "./AppComponents/Product/ProductComponent";
// import Cart from "./AppComponents/Cart/CartComponent"

let Header = lazy(()=> import("./CommonComponent/HeaderComponent"));
//import ChildComponent from "./CommonComponent/ChildComponent";
let Home = lazy(()=> import("./CommonComponent/HomeComponent"));
let Footer = lazy(()=> import("./CommonComponent/FooterComponent"));
let About = lazy(()=> import("./CommonComponent/AboutComponent"));
let NotFound = lazy(()=> import("./CommonComponent/NotFound"));
//import User from "./AppComponents/User/UserComponent";
//import User from "./AppComponents/User/UserContainer";
let UserHook = lazy(()=> import("./AppComponents/User/UserHook"));
let Product = lazy(()=> import("./AppComponents/Product/ProductComponent"));
let Cart = lazy(()=> import("./AppComponents/Cart/CartComponent"));
let UnderstandingHooks = lazy(()=> import("./Hooks/UnderstandingHooks"));



import Hobby from "./AppComponents/Hobby/HobbyComponent";
import CheckOut from "./AppComponents/Checkout/CheckoutComponent";
import CouponPage from "./AppComponents/Coupon/CouponComponent";
import RecentOrders from "./AppComponents/RecentOrders/RecentOrdersComponent";
import CancelledOrders from "./AppComponents/CancelledOrders/CancelledOrders";

export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/home" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/product" element={<Product />} />
                            <Route path="/hook" element={<UserHook />} />
                            <Route path="/learn" element={<UnderstandingHooks />} />
                            {/* <Route path="/hobbies" element={<Hobby />} /> */}
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/coupon" element={<CouponPage />} />
                            <Route path="/checkout" element={<CheckOut />} />
                            <Route path="/about" element={<About />} />
                            <Route path='/about/:id' element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}