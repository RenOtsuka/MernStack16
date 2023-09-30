//defines the initial state for user and also returns user reducer with logic to create new user state
import * as ActionTypes from "../actionTypes";

const Initial_State = {
    Product : {
        name : "Item",
        price : 10,
        desc : "N/A",
        rating : 3
    }
}

let ProductReducer = (state = Initial_State, action)=>{

    switch (action.type) {
        case ActionTypes.AddProductToStore:
            return {
                ...state, Product : action.payload
            }
        default:
            return state;
    }
}

export default ProductReducer;