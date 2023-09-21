import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyComp from "./Components/MyComponent";
import FormComp from "./Components/FormComp";

/* 
Tasks:
//1. state and how to update the state
//2. props sharing information between components
//3. event binding
//4. controlled and uncontrolled way of writing components
*/


/* 
1. Create a component of your name and a component with name of your city
2. Add them to route - name and city, in city also create a route using route param and pass the value of zip code
3. Create a component with name lifeCycle and implement all life cycle methods we did so far
*/

export default class Application extends Component{

  constructor(props){
    super(props);

    //1.
    this.state = {
      headerValue: "My First React App. Page",
      age: 10
    }

  }

  //1.
  changeText = (evt) => {
    console.log(evt);

    this.setState({
      headerValue: "New Title MERN Stack"
    });

     evt.preventDefault();
  };


  //2.
  getFromChild = (childInfo) => {
    this.setState({
      age: childInfo
    });
  };



  render(){
    let name = "Ryan";
    return(
      <>
        
        <h1>{this.state.headerValue}</h1>
        <button onClick={this.changeText}>Change Text</button>
        <h2>Hello React, I am {this.state.age} years old</h2>

        <FormComp/>
        <br/>
        <MyComp name={name} callbk={this.getFromChild}/>
        <br/>
      </>
    );
  }

}
