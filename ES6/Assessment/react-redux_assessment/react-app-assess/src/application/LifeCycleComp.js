import React, { PureComponent } from "react";

export default class LifeCycle extends PureComponent { //PureComponent implements shouldComponentUpdate

  //creation life cycle
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ryan",
      userAge: 25
    };

    this.userNameRef = React.createRef();
    this.userAgeRef = React.createRef();
  }


  //update life cycle
  componentDidMount() {
    console.log("Component is mounted");
    this.userNameRef.current.value = "Bob";
    this.userAgeRef.current.value =  20;
  }

  //update life cycle
  componentDidUpdate(prevState, prevProps){
    console.log("prevState",prevState);
    console.log("prevProps", prevProps);
}

  //destruction life cycle
  componentWillUnmount() {
    console.log("Component Will Unmount")
  }

  formSubmit = (evt) => {
    evt.preventDefault();

    let uName = this.userNameRef.current.value;
    let uAge = this.userAgeRef.current.value;;

    this.setState({
      userName: uName,
      userAge: uAge
    });
  }

  //creation and update
  render() {
    return (
      <>
        <br />
        <h1>Life Cycle Page</h1>

        <form action="/saveUser" onSubmit={this.formSubmit}>
          <b>User Name: </b>
          <input type="text" ref={this.userNameRef} ></input><br />
          <b>Age: </b>
          <input type="number" ref={this.userAgeRef} ></input> <br /> <br />
          <button type="submit" >Save</button>
        </form>

        <br /> <br />

        <div>
          <p>Entered Name: {this.state.userName}</p>
          <p>Entered Age: {this.state.userAge}</p>
        </div>
      </>
    );
  }
}