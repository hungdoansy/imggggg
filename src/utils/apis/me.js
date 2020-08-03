const getUserProfile = (tokens) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!tokens && tokens.includes("987654")) {
        resolve({ id: 3, name: "Hung3" });
      } else {
        reject({ message: "token is not valid" });
      }
    }, 1000);
  });
};

export { getUserProfile };
