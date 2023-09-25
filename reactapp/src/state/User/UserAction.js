//this defines all the actions raised for user state like - adduserToStore, signinupUser, etc

import * as ActionTypes from "../actionTypes"


export const AddUserToStore = (newUser)=>{
    return {
        type : ActionTypes.AddUserToStore,
        payload : newUser
    }
}