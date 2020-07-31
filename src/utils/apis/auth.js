const users = [{ email: "admin@gotitapp.co", password: "123455" }];

// TODO: convert to the real API
const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    // TODO: Check for 400 and 404 response
    if (
      users.find((u) => u.email === email && u.password === password) !== -1
    ) {
      setTimeout(() => {
        resolve({ access_token: "987654" });
      }, 2000);
    } else {
      setTimeout(() => {
        reject({ message: "Username and password are not matched." });
      }, 2000);
    }
  });
};

const signup = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    // TODO: Check for 400 and 404 response
    if (users.find((u) => u.email === email) !== -1) {
      setTimeout(() => {
        reject({ message: "Existed" });
      }, 2000);
    } else {
      users.push({ name, email, password });

      setTimeout(() => {
        resolve({ access_token: "9876543" });
      }, 2000);
    }
  });
};

export { login, signup };
