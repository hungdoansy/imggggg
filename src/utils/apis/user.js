import { generateGetRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const getUserInfo = () => generateGetRequest(`${API_HOST}/users/me`, true);

export { getUserInfo };
