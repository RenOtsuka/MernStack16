import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./components/Success";
import SuccessStory from "./components/SuccessStory";
import UserSignIn from "./components/UserSignIn";
import Product from "./components/Product";

export default class Application extends Component {

  constructor(props){
    super(props);
    this.state = {
      age : 10
    }
   
  }

  getFromChild = (info) =>{
    this.setState({
      age : info 
    });
  }

  render(){
    return( 
      <>
        <Success element={<SuccessStory callbk={this.getFromChild}/>}></Success>
        <br></br>
        <UserSignIn></UserSignIn>
        <br></br>
        <Product></Product>
        <br></br>
        <h4>Age Passed from SuccessStory</h4>
        <p>Age: {this.state.age}</p>
     </>
     );
  }
}