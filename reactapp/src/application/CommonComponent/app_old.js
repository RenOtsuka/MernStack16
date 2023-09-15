import React, { Component } from "react";

import Header from "./CommonComponent/HeaderComponent";
import ChildComponent from "./CommonComponent/ChildComponent";
import HomeComponent from "./CommonComponent/HomeComponent";

export default class Application extends Component{

  constructor(props){
    super(props);

    //state: data obj. to apply changes in react component can call method to create VDOM
    //can't be accessed outside the component

    this.state = {
      headerValue: "My First React App. Page",
      age:18
    }
    this.number = 20;
  }

  changeText = (evt) => {

    console.log(evt);

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

  executedByChild = (dataFromChild)=>{
    this.setState({
        age : dataFromChild
    })
  }


  render(){
    let name = "Van Duc Phan"
    console.log("Creating virtual dom "+ this.state.headerValue)
    //JSX - code, html+javascript creating a virtual dom
    return( 
        <>
            <Header />
            <HomeComponent />
            <h1>{this.state.headerValue}</h1>   
            <button onClick={this.changeText}>Change Text</button>
            
            <h2> Hello React {name} </h2>
            <h4> Age Value : { this.state.age } </h4>
            <hr/>
            <ChildComponent name={"Child of Application Component"}  header={this.state.headerValue} callBackFunc={this.executedByChild} >
                <b> First HTML Element </b>
                <b> Second HTML Element </b>
                <b> Third HTML Element </b>
            </ChildComponent>
        </>
    )
}

}