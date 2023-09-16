import React, { Component } from "react";
import RyanComp from "./Components/ryanComponent";
import MyComp from "./Components/MyComp";

/* 
Tasks:
//1. state and how to update the state
//2. props sharing information between components
//3. event binding
//4. controlled and uncontrolled way of writing components
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



//4.
  formSubmit = (evt) => {
    evt.preventDefault();

    let nameValue = this.nameRef.current.value;
    let ageValue = this.ageRef.current.value;

    this.setState({
      age: ageValue,
      name: nameValue
    });

  };

  render(){
    let name = "Van Duc Phan";
    return(
      <>
        
        <h1>{this.state.headerValue}</h1>
        <button onClick={this.changeText}>Change Text</button>
        <h2>Hello React, I am {this.state.age} years old</h2>

        <MyComp/>
        <br/>
        <RyanComp name={name} callbk={this.getFromChild}/>
        <br/>

  
      </>
    );
  }

}
