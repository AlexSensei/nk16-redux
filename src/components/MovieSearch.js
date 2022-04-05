import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchValueSelector } from "../store/movie/selectors";
import { setSearchValue } from "../store/movie/slice";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const value = useSelector(searchValueSelector);

  return (
    <input
      placeholder="Search..."
      value={value}
      onChange={(e) => dispatch(setSearchValue(e.target.value))}
    />
  );
};

export default MovieSearch;
