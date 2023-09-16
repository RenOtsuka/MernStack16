import React, {Component} from "react";

export default class MyComp extends Component{

  constructor(props){
    super(props);
    this.state = {
      Name: "Jason",
      Age: 12
    }

   //Ref - elements work out of scope of react renderer, as free html element
    this.userNameRef = React.createRef();
    this.ageRef = React.createRef();
  }

  textChange = (evt) => {

    let target = evt.target; //element where the event took place
    let val = target.value;

    let classList = target.classList; //gets the className from the target

    if(classList.contains("userName")){ //checks which class the target is and update state accordingly
      this.setState({
        Name: val
      });
    }
    else{
      this.setState({
        Age: val
       });
    }
    evt.preventDefault();
  }


  formSubmit = (evt) => {

    let userName = this.userNameRef.current.value; //gets the current value from the form
    let userAge = this.ageRef.current.value;

    this.setState({
      Name: userName,
      Age: userAge
    });


    evt.preventDefault();
  }



  render(){
    return(
       <>
        <h1>My Component</h1>

        {/* controlled component using div based structure (re-render everytime state changes) */}
        <div className="form col-md 12"> 
          <div className="col-md 8">
            <label>User Name: </label>
            <input type="text" className="userName" value={this.state.Name} onChange={this.textChange}></input>
          </div>
          <div className="col-md 8">
            <label>Age: </label>
            <input type="text"  className="age" value={this.state.Age} onChange={this.textChange}></input>
          </div>
        </div>

        {/* uncontrolled component where we update state at the end */}
        <form action="/saveUser" onSubmit={this.formSubmit}>
          <b>User Name</b>
          <input type="text" ref={this.userNameRef}></input>

          <b>Home Address</b>
          <input type="text" ref={this.userAddressRef} ></input>

          <button type="submit">Save</button>
        </form>

      </>
    );
   
  }
  

}

