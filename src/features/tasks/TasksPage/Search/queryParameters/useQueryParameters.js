import {
  useLocation
} from "react-router-dom";


export const useQueryParameters = (searchQueryParamsName) => {

  const location = useLocation();
  return new URLSearchParams(location.search).get(searchQueryParamsName)
};