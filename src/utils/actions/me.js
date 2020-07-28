const me = ({ tokens }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!tokens && tokens.includes("987654")) {
        resolve({ email: "haha@hehe.com", name: "haha" });
      } else {
        reject({ message: "token is not valid" });
      }
    }, 1000);
  });
};

export { me };
