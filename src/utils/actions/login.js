const users = [{ username: "admin", password: "123455" }];

// TODO: convert to the real API
const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    // TODO: Check for 400 and 404 response
    let result = {};
    if (
      users.find((u) => u.username === username && u.password === password) !==
      -1
    ) {
      result = {
        access_token: "987654",
      };
    } else {
      result = {
        message: "Username and password are not matched.",
      };
    }
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
};

export { login };
