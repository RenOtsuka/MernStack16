import * as actionTypes from "../actionTypes";

let INITIAL_STATE = {
    products:[],
    defaultProduct : {
        name : "Product Name",
        price : 1,
        desc : "Product Description",
        rating : "Product Rating"
    }
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case actionTypes.ADD_PRODUCTS_TOSTORE :
            //..state - products[] and defaultProduct
            return { ...state, products : action.payload.products } //we update products and then retrun a new state

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}