import React from "react";

let SuccessChild = (props) => {

  return(
    <>
      <br></br>
      <h3>Success Child Component</h3>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
      <>{props.elementComp}</>
    </>
  );
}

export default SuccessChild;