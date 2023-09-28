import * as ActionTypes from "../actionTypes";
import axios from "axios";

export const AddUser2ToStore = (newUser) => {
  return{
    type: ActionTypes.AddUser2ToStore,
    payload: newUser
  }
};

export const saveUser2ToDb = (user) => {

  return(dispatch) => {

    console.log("called by dispatch and synced by thunk");

    axios.post("http://localhost:9000/user/api/signinup", user)
    .then((savedUser) => {
      let signInUser = savedUser.data;
      console.log(signInUser);
      dispatch(AddUser2ToStore(signInUser));
    })
    .catch((err) => console.log(err));
  };
  
}

