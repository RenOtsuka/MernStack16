import React, { Component } from "react";
import Header from "./CommonComponent/HeaderComponent";

export default class Application extends Component{

  constructor(props){
    super(props);

    //state: data obj. to apply changes in react component can call method to create VDOM
    this.state = {
      headerValue: "My First React App. Page"
    }
    this.number = 20;
  }

  changeText = () => {
    // this.state.headerValue = "New Title MERN Stack " + this.number; //render is not being invoked as state is not updated properly 

    //api to update VDOM by calling react render:
    //batch process to update multiple states in concurrent

    // 1. recommended to use setState (internally calls render())
    this.setState({
      headerValue: "New Title MERN Stack " + this.number
    });
    this.number++;

    // 2. force update: not recommended as it skips life cycle methods like - shouldcomponentupdate
    // this.state.headerValue = "New Title MERN Stack " + this.number;
    // this.forceUpdate(); //forcefully update state and invoked render (should be avoided)

    console.log("on click " + this.state.headerValue); //logs old val

    evt.preventDefault();
  };


  render(){
    let name = "Bob";
    console.log("Creating VDOM" + this.state.headerValue); //logs new val
    //JSX - code, html + JS creating a VDOM
    return(
      <>
        <Header/>
        <h1>{this.state.headerValue}</h1>
        <button onClick={this.changeText}>Change Text</button>
        <h2>Hello React {name}</h2>
        <br/>
      </>
    );
  }

}