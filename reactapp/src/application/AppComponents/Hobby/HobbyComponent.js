import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveHobbyToDb } from "../../../state/Hobby/HobbyAction";

/*
Hobby - Additional Task
1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
2. Create an action to save the hobby, can use useractions file and userrouter file for the same
3. Fetch the saved hobbies and show them in Login Page so that user can select any hobby and update the user info
 */

let HobbyComponent = (props) => {

  let defaultHobby = useSelector((state)=>state.hobbyReducer.Hobby);
  let [hobby , setHobby] = useState(defaultHobby.hobbyName);
  let dispatchToDB = useDispatch();

  let onTextChange = (evt)=>{
    let classs = evt.target.classList;
    if (classs.contains("hobby")) {
      setHobby(evt.target.value);
    }
    evt.preventDefault();
}

  let readFormData = (evt) => {

    

    let hobbySave = {
      hobbyName: hobby
    };

    console.log(hobbySave);
    
    dispatchToDB(saveHobbyToDb(hobbySave));
    evt.preventDefault();
  }

  return (
    <>
      <h1>Hobby Component</h1>
      <form className={"form col-md-10 userHook"} onSubmit={readFormData}>
        <label>
          <b>Hobby :</b>
          <input type="text" className={"form-control col-md-12 hobby"} value={hobby}   onChange={onTextChange}
            placeholder="Please enter a hobby" maxLength={20} required />
        </label>
        <input type="submit" className={"btn btn-primary"} value="Add Hobby" />
      </form>
    </>
  );
}

export default HobbyComponent;