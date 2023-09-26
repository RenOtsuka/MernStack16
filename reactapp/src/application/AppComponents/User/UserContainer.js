//This will be used to create a link between react and redux stuff and make common functions reuse
import UserComponent from "./UserComponent";
import { connect } from "react-redux";
import { AddUserToStore, saveUserToDb } from "../../../state/User/UserAction";

//subsciber
let mapstateToProps = (store)=>{
    return {
        User : store.userReducer.User //can be accessed as props.User
    }
}

//publisher
let mapdispatchToProps = (dispatch)=>{
    return {
        AddUser : (newUser)=>{ //can be accessed as props.AddUser
            dispatch(AddUserToStore(newUser)) //dispatch the action - AddUserToStore
        },
        SignIn : (newUser)=>{
            dispatch(saveUserToDb(newUser))
        }
    }
}

//now component becomes subscirber as well as publisher
export default connect(mapstateToProps, mapdispatchToProps)(UserComponent)