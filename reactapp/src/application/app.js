import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

import Header from "./CommonComponent/HeaderComponent";
//import ChildComponent from "./CommonComponent/ChildComponent";
import Home from "./CommonComponent/HomeComponent";
import Footer from "./CommonComponent/FooterComponent";
import About from "./CommonComponent/AboutComponent";
import NotFound from "./CommonComponent/NotFound";
//import User from "./AppComponents/User/UserComponent";
import User from "./AppComponents/User/UserContainer";


export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/home" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/user" element={<User />} />
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