import axios from "axios";
import { returnErrors } from "./messages";

import { USER_LOADING, USER_LOADED, AUTH_ERROR } from "./type";

//CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER Loading
  dispatch({ type: USER_LOADING });

  // GET Token From State
  const token = getState().auth.token;

  //HEaders
  const config = {
    headers: {
      "Content-Type": "application.json"
    }
  };

  //   If toke
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  axios
    .get("/api/auth/user", config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};
