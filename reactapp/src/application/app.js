import React, { Component } from "react";
import Header from "./CommonComponent/HeaderComponent";
import MyComp from "./CommonComponent/ryanComponent";

export default class Application extends Component{

  constructor(props){
    super(props);
  }

  //changes here hot loads the content w/o reloading the server
  render(){
    let name = "Bob"
    //JSX - code, html+JS creating a virtual dom
    return(
      <>
        <Header/>
        <h1> My First React Application Page</h1>
        <h2>Hello React {name}</h2>
        <br/>
        <MyComp/>
      
      </>
    );
  }

}