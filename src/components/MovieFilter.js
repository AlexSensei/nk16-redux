import React from "react";
import { useDispatch } from "react-redux";
import { setSortBy } from "../store/movie/slice";

const MovieFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      Movie Filter
      <button
        onClick={() => {
          dispatch(setSortBy("nameAsc"));
        }}
      >
        Name Asc
      </button>
      <button
        onClick={() => {
          dispatch(setSortBy("nameDesc"));
        }}
      >
        Name Desc
      </button>
      <button
        onClick={() => {
          dispatch(setSortBy("durationAsc"));
        }}
      >
        Duration Asc
      </button>
      <button
        onClick={() => {
          dispatch(setSortBy("durationDesc"));
        }}
      >
        Duration Desc
      </button>
    </div>
  );
};

export default MovieFilter;
