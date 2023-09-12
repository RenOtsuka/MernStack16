import React, {Component} from "react";

export default class HomeComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      uName: "Jason",
      uState: "Chicago"
    }

   //Ref - elements work out of scope of react renderer, as free html element
    this.userNameRef = React.createRef();
    this.userAddressRef = React.createRef();
  }

  textChange = (evt) => {

    let target = evt.target; //element where the event took place
    let val = target.value;

    let classList = target.classList; //gets the className from the target

    if(classList.contains("userName")){ //checks which class the target is and update state accordingly
      this.setState({
       uName: val
      });
    }
    else{
      this.setState({
        uState: val
       });
    }

    // console.log(val);
    evt.preventDefault();
  }


  // textChangeAddress = (evt) => {

  //   let target = evt.target;
  //   let val = target.value;
  //   console.log(val);
  //   this.setState({
  //     uState: val
  //   })
  //   evt.preventDefault();
  // }

  formSubmit = (evt) => {

    let userName = this.userNameRef.current.value; //gets the current value from the form
    let userAddress = this.userAddressRef.current.value;

    // alert(userName + " " +  userAddress);

    this.setState({
      uName: userName,
      uState: userAddress
    });


    evt.preventDefault();
  }



  render(){
    return(
       <>
        <h1>Home Component</h1>

        {/* controlled component using div based structure (re-render everytime state changes) */}
        <div className="form col-md 12"> 
          <div className="col-md 8">
            <label>User Name: </label>
            <input type="text" className="userName" value={this.state.uName} onChange={this.textChange}></input>
          </div>
          <div className="col-md 8">
            <label>Home Address: </label>
            <input type="text"  className="address" value={this.state.uState} onChange={this.textChange}></input>
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

