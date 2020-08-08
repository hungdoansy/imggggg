import { generateRequest } from "./generateRequest";

const API_HOST = process.env.REACT_APP_API_HOST;

const signin = ({ email, password }) => {
  const stringifiedBody = JSON.stringify({ email, password });

  return generateRequest(
    "POST",
    `${API_HOST}/auth`,
    undefined,
    stringifiedBody
  );
};

const signup = ({ email, password, name }) => {
  const stringifiedBody = JSON.stringify({ email, password, name });

  return generateRequest(
    "POST",
    `${API_HOST}/users`,
    undefined,
    stringifiedBody
  );
};

export { signin, signup };
