import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_LEADS, DELETE_LEADS, ADD_LEADS } from "./type";

//GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE
export const deleteLeads = id => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id} `, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "lead Deleted!!" }));
      dispatch({
        type: DELETE_LEADS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD
export const addLeads = lead => (dispatch, getState) => {
  axios
    .post(`/api/leads/ `, lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "lead Added!!" }));
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
