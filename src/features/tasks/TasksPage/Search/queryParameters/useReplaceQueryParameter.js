import { useLocation, useHistory } from "react-router-dom";

export const useReplaceQueryParameters = () => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);

  return ({ value, key }) => {
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
