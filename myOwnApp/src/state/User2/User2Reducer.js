import * as ActionTypes from "../actionTypes";

let init_state = {
  User:{
    userName : "Bob",
    password : "Smith",
    street : "Los Angeles",
    mobile : 100
  }
}

//returns curr. state and action
let User2Reducer = (state = init_state, action) => {
  switch (action.type) {
    case ActionTypes.AddUser2ToStore:
        return{
          ...state, User: action.payload
        };
    default:
     return state;
  }
}

export default User2Reducer;