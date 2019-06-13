import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const URL = "http://localhost:5000";

export const login = creds => dispatch => {
  console.log(`::::: IN LOGIN ACTION ::::` + JSON.stringify(creds));
  dispatch({ type: LOGIN_START });
  return axios
    .post(`${URL}/api/auth/login`, creds)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.token);
      const saved = JSON.stringify(res.data);
      localStorage.setItem("data", saved);
      console.log("LOGIN RESPONSE IS  ----->" + JSON.stringify(res));
    })
    .catch(err => {
      console.log(":::::ERROR IS ::::::::" + err);
      dispatch({ type: LOGIN_FAILURE, payload: err });
      alert("Please register or use correct credentials");
    });
};

export const FETCHING_DATA = "FETCHING_DATA";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";

export const getData = data => dispatch => {
  dispatch({ type: FETCHING_DATA, payload: data });
  dispatch({ type: FETCHING_DATA_SUCCESS });
};

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  console.log(":: IN ACTION LOGOUT ::");
  dispatch({ type: LOGOUT });
  localStorage.removeItem("token");
  localStorage.removeItem("data");
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.reload();
};
