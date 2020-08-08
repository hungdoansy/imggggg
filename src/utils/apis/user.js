import { generateRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const getUserProfile = (tokens) => {
  return generateRequest("GET", `${API_HOST}/users/me`, tokens);
};

export { getUserProfile };
