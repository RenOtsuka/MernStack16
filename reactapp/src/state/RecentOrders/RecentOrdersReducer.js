import * as ActionTypes from "../actionTypes";

let init_state = [];

export default function RecenOrdersReducer(state = init_state, action) 
{
    // console.log("cart Reducer", state, action);

    switch(action.type) 
    {
        case ActionTypes.ADD_ITEM:
          
            //checking for duplicate item with _id state=>list of products (cart list)
            let newState = state.filter(item => item._id != action.payload.item._id);
            return [...newState, action.payload.item];//creating a new state with new item

        default:
            return state;
    }
}