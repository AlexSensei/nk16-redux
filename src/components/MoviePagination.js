import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviePage, hasNextPage } from "../store/movie/selectors";
import { changePage } from "../store/movie/slice";

export const MoviePagination = () => {
  const dispatch = useDispatch();

  const pageNo = useSelector(selectMoviePage);
  const hasNext = useSelector(hasNextPage);
  return (
    <div style={{ display: "flex" }}>
      <button disabled={pageNo < 2} onClick={() => dispatch(changePage(-1))}>
        previous
      </button>
      <p>{pageNo}</p>
      <button disabled={!hasNext} onClick={() => dispatch(changePage(1))}>
        next
      </button>
    </div>
  );
};
