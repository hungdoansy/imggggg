export const getLocalTokens = () => {
  try {
    const serializedTokens = JSON.parse(localStorage.getItem("tokens"));
    return serializedTokens ? serializedTokens : null;
  } catch (e) {
    localStorage.removeItem("tokens");
    return null;
  }
};
