import { createContext, useContext } from "react";

const AuthContext = createContext();
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, useAuthContext };
