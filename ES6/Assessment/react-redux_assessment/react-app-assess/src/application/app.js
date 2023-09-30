import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Header from "./HeaderComp";
import Product from "./Product/ProductComp.jsx";
import LifeCycle from "./LifeCycleComp";

export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                        <Routes>
                            <Route path="/product" element={<Product />} />
                            <Route path="/lifecycle" element={<LifeCycle />} />
                        </Routes>
                    </Suspense>
                </Router>
            );
        };
}