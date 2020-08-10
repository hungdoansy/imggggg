import { generatePostRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const signin = ({ email, password }) =>
  generatePostRequest(`${API_HOST}/auth`, { email, password }, false);

const signup = ({ email, password, name }) =>
  generatePostRequest(`${API_HOST}/users`, { email, password, name }, false);

export { signin, signup };
