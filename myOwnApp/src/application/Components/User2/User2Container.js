import User2 from "./User2Component";
import {connect} from "react-redux";
import {AddUser2ToStore, saveUser2ToDb} from "../../../state/User2/User2Action";


//gets user from store
let mapstateToProps = (store) => {
  return{
    User: store.user2Reducer.User
  }
};


let mapdispatchToProps = (dispatch)=> {
  return{
    AddUser: (newUser) => {
      dispatch(AddUser2ToStore(newUser));
    },
    SignIn: (newUser) => {
      dispatch(saveUser2ToDb(newUser));
    }
  }

};