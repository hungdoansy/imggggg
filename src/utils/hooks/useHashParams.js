import { useLocation } from "react-router-dom";

export const useHashParams = () => {
  const hashParams = new URLSearchParams(useLocation().hash.substring(1));

  const getPage = () => {
    const page = hashParams.get("page");

    // page would never be undefined
    if (page === null) {
      // #action=signin
      return 1;
    } else if (page === "") {
      // #action=signin&page
      return 1;
    } else {
      // #action=signin&page=34
      // #action=signin&page=asdhsd

      // TODO: handle page is NaN
      return parseInt(page);
    }
  };

  return { getPage };
};
