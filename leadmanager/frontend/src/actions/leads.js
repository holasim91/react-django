import axios from "axios";
import { createMessage } from "./messages";

import { GET_LEADS, DELETE_LEADS, ADD_LEADS, GET_ERRORS } from "./type";

//GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE
export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id} `)
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
export const addLeads = lead => dispatch => {
  axios
    .post(`/api/leads/ `, lead)
    .then(res => {
      dispatch(createMessage({ addLead: "lead Added!!" }));
      dispatch({
        type: ADD_LEADS,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
