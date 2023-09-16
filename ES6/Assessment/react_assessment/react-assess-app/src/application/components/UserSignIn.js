import React, {Component} from "react";

export default class UserSignIn extends Component {

  constructor(props){
    super(props);
    this.state = {
      uname: "Jason",
      pwd: "bob123"
    }

    this.username = React.createRef();
    this.password = React.createRef();
  }


  formSubmit = (evt) => {
   evt.preventDefault();

    let userName = this.username.current.value; 
    let userpwd = this.password.current.value;


    this.setState({
      uname: userName,
      pwd: userpwd
    });
  
  }

  render(){
    return( 
       <>
        <h3>Sign In Component</h3>
       <form action="/saveUser" onSubmit={this.formSubmit}>
          <b>User Name: </b>
          <input type="text" ref={this.username}></input>
          <br></br>   <br></br>
          <b>Password: </b>
          <input type="text" ref={this.password} ></input>
          <br></br>
          <button type="submit">Save</button>
        </form>

        <br></br>

        <div>
            <p>Entered Name: {this.state.uname}</p>
            <p>Entered Password: {this.state.pwd}</p>
        </div>
       </>
    );
  }

}