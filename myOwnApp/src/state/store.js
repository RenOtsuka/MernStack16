import {combineReducers, applyMiddleware} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user2Reducer from "./User2/User2Reducer";


const rootReducer = combineReducers({
  user2Reducer
});

export default configureStore(
  {reducer: rootReducer},
  {},
  applyMiddleware(thunk)
);