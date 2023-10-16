//defines the initial state for user and also returns user reducer with logic to create new user state
import * as ActionTypes from "../actionTypes";

const Initial_State = {
  Hobby: {
    hobbyName: "Football"
  }
}


//write callback/ reducer to generate new state upon action change

let hobbyReducer = (state = Initial_State, action) => {
  //switch case logice to read action type and return new state / updated state

  switch (action.type) {

    case ActionTypes.AddHobbyToStore:
      //...state : {User, Product ...etc}
      //returning all other states as it is but updating User using payload
      return { ...state, Hobby: action.payload}

    default:
      return state
  }
}

export default hobbyReducer;