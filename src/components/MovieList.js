import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieService from "../services/MovieService";
import { moviesSelector, searchValueSelector } from "../store/movie/selectors";
import { getMovies, setMovies } from "../store/movie/slice";
import MovieRow from "./MovieRow";

const MovieList = (props) => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const searchValue = useSelector(searchValueSelector);
  const handleSetMovies = (movies) => dispatch(setMovies(movies));

  useEffect(() => {
    fetchMovies();
    dispatch(getMovies());
  }, []);

  const fetchMovies = async () => {
    const data = await movieService.getAll();

    handleSetMovies(data);
  };

  return (
    <div>
      movies
      {movies.length
        ? movies.map((movie) => <MovieRow movie={movie} />)
        : searchValue && <p>No results for "{searchValue}" </p>}
    </div>
  );
};

export default MovieList;
