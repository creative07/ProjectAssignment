import { userConstants } from "../constants/user.constants.js";

const initialState = {};

export function user_reducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_DETAILS_REQUEST:
      return {
        ...state,
        userdetails: action.payload,
      };
    case userConstants.USER_DETAILS_SUCCESS:
      return {
        ...state,
        userdetails: action.payload,
      };
    case userConstants.USER_DETAILS_FAILURE:
      return {
        ...state,
        userdetails: action.payload,
      };
    default:
      return state;
  }
}
