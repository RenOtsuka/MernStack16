import React, { PureComponent } from "react";

//PureComponent implements shouldComponentUpdate
export default class LifeCycle extends PureComponent {

  //creation life cycle
  constructor(props){
    
    super(props)
    this.state = {
        uName : "Jason",
        uState : "Chicago"
    };

    this.userNameRef = React.createRef();
    this.userAddressRef = React.createRef();
  }


  //update life cycle
  componentDidMount(){

  }


  //destruction life cycle
  componentWillUnmount(){

  }


  //creation and update
  render(){
    return(
    <>
    </>
    );
  }
}