import * as actionTypes from "../actionTypes";

export const addCoupon = (value) => {
  return {
      type: actionTypes.AddCouponToStore,
      payload: value 
  }
}

export const saveCouponToStore = (coupon) => {
  return(dispatch) => {
    dispatch(addCoupon);
  }
}