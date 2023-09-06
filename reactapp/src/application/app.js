import React, { Component } from "react";
import Header from "./CommonComponent/HeaderComponent";

export default class Application extends Component{

  constructor(props){
    super(props);
  }

  //changes here hot loads the content w/o reloading the server
  render(){
    let name = "Ryan"
    //JSX - code, html+JS creating a virtual dom
    return(
      <>
        <Header/>
        <h1> My First React Applicaion Page</h1>
        <h2>Hello React {name}</h2>
      </>
    );
  }

}