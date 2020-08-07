const API_HOST = process.env.REACT_APP_API_HOST;

const signin = ({ email, password }) => {
  let status = null;

  return fetch(`${API_HOST}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure
};

const signup = ({ email, password, name }) => {
  let status = null;

  return fetch(`${API_HOST}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((response) => {
      status = response.status;
      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => ({ status, data: e })); // TODO: network failure;
};

export { signin, signup };
