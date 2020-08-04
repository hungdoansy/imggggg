import { createContext, useContext } from "react";

const ProfileContext = createContext();
const useProfileContext = () => {
  return useContext(ProfileContext);
};

export { ProfileContext, useProfileContext };
