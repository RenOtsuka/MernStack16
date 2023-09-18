import React from "react";

let SuccessStory = (props) => {

  // let age = 20;
  return(
    <>
      <br></br>
      <h3>Success Story Component</h3>
      <p>This component is passed from Success</p>
      <button onClick={() => props.callbk(20)}>Click To send info back up</button>
    </>
  );


}

export default SuccessStory;