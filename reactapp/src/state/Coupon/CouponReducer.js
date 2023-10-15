import * as actionTypes from "../actionTypes";

let init_state = {
  Coupon: {
    value: 0
  }
}

export default function CouponReducer(state = init_state, action) {
  switch (action.type) {

    case actionTypes.AddCouponToStore:
      //..state - products[] and defaultProduct
      return { ...state, Coupon: action.payload }

    default:
      return state;
  }
}