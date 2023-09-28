//Hook - an extract of feature that we could get from library
import React,  { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AddUserToStore, saveUserToDb } from "../../../state/User/UserAction";

let UserHook = (props)=>{

//this.state can't be created 
//this.state = { userName : "John Doe"} //initialize the state
//this.setState({}) //callback to update the state and create v-dom

//initializes one state and returns a callback to update that state
// let [userName, setUserName] = useState("John Doe")
// let onTextChange = (evt)=>{
//     let target = evt.target;
//     setUserName(target.value)
// }

//makes our component capable of being subscriber to store like mapStateToProps
let user = useSelector((state)=>state.userReducer.User)

//useDispatch - replacement of mapDispatchToProps makes component able to dispatch the action
let dispatchToDB = useDispatch();


//initialization of default values using ref
let userNameRef = useRef(null);
let passwordRef = useRef(null);
let streetRef = useRef(null);
let mobileRef = useRef(null);

//componentDidMount
//when first rendering is done and UI can be accessed - componentDidMount
//useeffect is the hook that we use to make it work as componentDidMount, componentWillUnmount
useEffect(()=>{
    //assign the values we got from reducer
    userNameRef.current.value = user.userName //"David" 
    passwordRef.current.value = user.password
    streetRef.current.value = user.street
    mobileRef.current.value = user.mobile   
})

let readFormData = (evt)=>{
    let user = {
        userName : userNameRef.current.value,
        password : passwordRef.current.value,
        street : streetRef.current.value,
        mobile : mobileRef.current.value,
    }

    alert(JSON.stringify(user));

    dispatchToDB(saveUserToDb(user));

    evt.preventDefault();
}

return(
    <>
        <h1>User Hook Component</h1>
        <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
            <label>
                <b>User Name :</b>
                {/* <input type="text" className={"form-control col-md-12"} value={userName} 
                    onChange={(evt)=>{setUserName(evt.target.value)}}
                    //onChange={onTextChange}
                    placeholder="Please enter user name" maxLength={20} required/> */}
                    <input type="text" className={"form-control col-md-12"} ref={userNameRef}
                    placeholder="Please enter user name" maxLength={20} required/>
            </label>
            <br/>
            <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={passwordRef} 
                            placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={streetRef} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={mobileRef} 
                            placeholder="Please enter mobile" />
                </label>
            <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
        </form>
    </>
)
    
}

export default UserHook;