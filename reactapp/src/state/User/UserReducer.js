//defines the initial state for user and also returns user reducer with logic to create new user state
import * as ActionTypes from "../actionTypes";

const Initial_State = {
    User : {
        userName : "",
        password : "",
        street : "",
        mobile : 0
    }
}


//write callback/ reducer to generate new state upon action change

let UserReducer = (state = Initial_State, action)=>{
    //switch case logice to read action type and return new state / updated state

    switch (action.type) {

        case ActionTypes.AddUserToStore:
            //...state : {User, Product ...etc}
            //returning all other states as it is but updating User using payload
            return {...state, User : action.payload}

        default:
            return state
    }
}

export default UserReducer;