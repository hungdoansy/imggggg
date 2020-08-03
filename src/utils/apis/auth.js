import axios from "axios";

const API_HOST = process.env.REACT_APP_API_HOST;

const signin = ({ email, password }) => {
  return axios.post(`${API_HOST}/auth`, { email, password });
};

const signup = ({ email, password, name }) => {
  return axios.post(`${API_HOST}/users`, { email, password, name });
};

export { signin, signup };
