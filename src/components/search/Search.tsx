import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";

import { searchActions } from "../../redux/slice/search";
import { RootState } from "../../redux/store";

function Search() {
  const [input, setInput] = useState("");

  const countryList = useSelector(
    (state: RootState) => state.country.countries
  );

  const dispatch = useDispatch();
  const result = countryList.filter((item) =>
    item.name.common.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    let results;
    if (input === "") {
      results = countryList;
    } else {
      results = result;
    }
    dispatch(searchActions.searchData(results));
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <TextField
        autoComplete="off"
        id="standard-basic"
        label="Search country"
        variant="standard"
        value={input}
        onChange={onChangeHandler}
      />
    </Container>
  );
}

export default Search;
