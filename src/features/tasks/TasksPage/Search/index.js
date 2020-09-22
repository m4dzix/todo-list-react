import React from "react";
import searchQueryParamsName from "../searchQueryParamsName";
import { SearchForm, Input } from "../input";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../queryParameters";

const Search = () => {
  const query = useQueryParameters(searchQueryParamsName);
  const replaceQueryParameters = useReplaceQueryParameters();

  const onInputChange = ({ target }) => {
    replaceQueryParameters({
      key: searchQueryParamsName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <SearchForm>
      <Input
        placeholder="Filter tasks"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchForm>
  );
};
export default Search;
