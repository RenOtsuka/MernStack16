import React, { Component } from "react";
import RyanComp from "./Components/ryanComponent";

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
      age: 10,
      name: "ryan"
    }

    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
  }

  //1.
  changeText = () => {
    this.setState({
      headerValue: "New Title MERN Stack"
    });
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

  //3.
  changeInput = (evt) => {
    let value = evt.target.value;
    let classList = target.classList;

    if(classList.contains("name")){
      this.setState({
        name: value
      });
    }
    else{
      this.setState({
        age: value
       });
    }

  };


  render(){
    return(
      <>
        
        <h1>{this.state.headerValue}</h1>
        <button onClick={this.changeText}>Change Text</button>
        <h2>Hello React, I am {this.state.age} years old</h2>

        <br/>
        <RyanComp name={this.state.name} callbk={this.getFromChild}/>
        <br/>

        <form onSubmit={this.formSubmit}>
          <label>Name:</label>
          <input type="text" className="name" ref={this.nameRef} onChange={this.changeInput}></input>
          <br/>
          <label>Age:</label>
          <input type="number" className="age" ref={this.ageRef} onChange={this.changeInput}></input>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }

}
