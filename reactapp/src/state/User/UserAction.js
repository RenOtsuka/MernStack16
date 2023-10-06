//this defines all the actions raised for user state like - adduserToStore, signinupUser, etc
import { getUserCart } from "../Cart/CartAction";
import * as ActionTypes from "../actionTypes"
import axios from "axios";

export const AddUserToStore = (newUser)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}

export const saveUserToDb = (user)=>{
     // thunk - makes it behave synchronously
     return (dispatch)=>{
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true)); //Jquery - ajax
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                user //passing into the body req.body
            )
            .then((savedUser)=>{
                let signdUser = savedUser.data;
                console.log(signdUser)

                dispatch(AddUserToStore(signdUser))
                dispatch(getUserCart(signdUser._id))
            })
            .catch((err)=>{
                console.log(err)
            })
     }
}