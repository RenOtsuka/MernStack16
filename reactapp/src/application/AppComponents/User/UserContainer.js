//will be used to create a link btw react and redux stuff and make common functions reuses
import UserComponent from "./UserComponent";
import { connect } from "react-redux";
import { AddUserToStore } from "../../../state/actionTypes";


//subsciber
let mapstateToProps = (store)=>{
  return {
      User : store.userReducer.User //can be accessed as props.User
  }
}

//publisher
let mapdispatchToProps = (dispatch)=>{
  return {
      AddUser : (newUser) => { //can be accessed as props.AddUser
        dispatch(AddUserToStore(newUser)); //dispatch the action - AddUserToStore
      }
  }
}

//now component becomes subscriber as well as publisher
export default connect(mapstateToProps, mapdispatchToProps)(UserComponent)
