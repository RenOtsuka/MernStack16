import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./components/Success";
import UserSignIn from "./components/UserSignIn";
import Product from "./components/Product";


export default class Application extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return( 
      <>
        <Router>
          <Routes>
            <Route path="/success" element={<Success/>}/>
            <Route path="/signIn" element={ <UserSignIn/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:name/:price" element={<Product/>}/>
          </Routes>
        </Router>
     </>
     );
  }
}