import { CREATE_MESSAGES } from "./type";

//CREATE_MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGES,
    payload: msg
  };
};
