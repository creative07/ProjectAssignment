import { userConstants } from "../constants/user.constants";
import { userService } from "../services/user.service";

export const userActions = {
  user_action,
};

function user_action(page) {
  return (dispatch) => {
    dispatch(user_request());

    userService.user_service(page).then(
      (user) => {
        dispatch(user_success(user));
      },
      (error) => {
        dispatch(user_failure(error));
      }
    );
  };

  function user_request() {
    return { type: userConstants.USER_DETAILS_REQUEST };
  }
  function user_success(user) {
    return {
      type: userConstants.USER_DETAILS_SUCCESS,
      payload: user,
    };
  }
  function user_failure(error) {
    return {
      type: userConstants.USER_DETAILS_FAILURE,
      error: error.response && error.response.data,
    };
  }
}
