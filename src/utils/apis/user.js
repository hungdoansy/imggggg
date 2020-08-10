import { getLocalTokens } from "utils/getLocalTokens";

import { generateRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const getUserInfo = () => {
  const tokens = getLocalTokens();
  return generateRequest("GET", `${API_HOST}/users/me`, tokens);
};

export { getUserInfo };
