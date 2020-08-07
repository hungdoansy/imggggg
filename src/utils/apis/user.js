const API_HOST = process.env.REACT_APP_API_HOST;

const getUserProfile = (tokens) => {
  let status = null;

  return fetch(`${API_HOST}/users/me`, {
    headers: {
      Authorization: `Bearer ${tokens}`,
    },
  })
    .then((response) => {
      status = response.status;

      return response.json();
    })
    .then((data) => ({ status, data }))
    .catch((e) => {
      console.log("Error while fetching photos", e);
      return [];
    }); // TODO: network failure;
};

export { getUserProfile };
