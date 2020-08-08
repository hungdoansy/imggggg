const generateRequest = (method, url, tokens, stringifiedBody) => {
  let status;

  return fetch(url, {
    method,
    headers: {
      Authorization: tokens ? `Bearer ${tokens}` : undefined,
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
      console.log(`Error while ${method} from : ${url}`);
      console.log(e);

      return [];
    }); // TODO: network failure;
};

export { generateRequest };
