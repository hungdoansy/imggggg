const validate = ({ token }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(token === "987654");
    }, 1000);
  });
};

export { validate };
