import { getLocalTokens } from "utils/getLocalTokens";

const generateRequest = (method, endpoint, body, isTokensNeeded) => {
  let status;
  let tokens = getLocalTokens();

  const stringifiedBody = body ? JSON.stringify(body) : undefined;

  return fetch(endpoint, {
    method,
    headers: {
      Authorization: isTokensNeeded ? `Bearer ${tokens}` : undefined,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: stringifiedBody,
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => {
      console.log(`Error while ${method} from : ${endpoint}`);
      console.log(e);

      return [];
    });
};

const generateGetRequest = (endpoint, isTokensNeeded = false) => {
  return generateRequest("GET", endpoint, undefined, isTokensNeeded);
};

const generatePostRequest = (endpoint, body, isTokensNeeded = true) => {
  return generateRequest("POST", endpoint, body, isTokensNeeded);
};

const generatePutRequest = (endpoint, body, isTokensNeeded = true) => {
  return generateRequest("PUT", endpoint, body, isTokensNeeded);
};

const generateDeleteRequest = (endpoint, body, isTokensNeeded = true) => {
  return generateRequest("DELETE", endpoint, body, isTokensNeeded);
};

export {
  generateGetRequest,
  generatePostRequest,
  generatePutRequest,
  generateDeleteRequest,
};
