import React from "react";

let RyanComp = (props) => {
  let childAge = 25;
  
  return(
    <>
      <h2>This is my Component</h2>
      <h3>My name is {props.name}</h3>
      <button onClick={props.callbk(childAge)}>Click to change Age</button>
    </>
  );

};

export default RyanComp;