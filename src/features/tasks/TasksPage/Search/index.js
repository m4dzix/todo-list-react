import React from "react";
import searchQueryParamsName from "../searchQueryParamsName";
import { StyledForm, Input} from "./styled";
import {useQueryParameters} from "./queryParameters/useQueryParameters"
import { useReplaceQueryParameters } from "./queryParameters/useReplaceQueryParameter";

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
    <StyledForm>
        <Input
          placeholder="Filter tasks"
          value = {query || ""}
          onChange = {onInputChange} 
        /> 
    </StyledForm>
  );
  };
export default Search;
