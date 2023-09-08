import React, { Component } from "react";
import MyComp from "./ryanComponent";

export default class Application extends Component{

  constructor(props){
    super(props);
    this.state = {
      headerValue: "My First React App. Page"
    }
  }

  changeText = () => {
    this.setState({
      headerValue: "New Title MERN Stack"
    });
  };

  //changes here hot loads the content w/o reloading the server
  render(){
    let name = "Bob";
    //JSX - code, html+JS creating a virtual dom
    return(
      <>
        
        <h1>{this.state.headerValue}</h1>
        <button onClick={this.changeText}>Change Text</button>
        <h2>Hello React {name}</h2>
        <br/>
        <MyComp/>
      </>
    );
  }

}
