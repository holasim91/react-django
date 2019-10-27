import { CREATE_MESSAGES, GET_ERRORS } from "./type";

//CREATE_MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  };
};

//RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status }
  };
};
