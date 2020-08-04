import axios from "axios";

const API_HOST = process.env.REACT_APP_API_HOST;

const getUserProfile = (tokens) => {
  return axios.get(`${API_HOST}/users/me`, {
    headers: {
      Authorization: `Bearer ${tokens}`,
    },
  });
};

export { getUserProfile };
