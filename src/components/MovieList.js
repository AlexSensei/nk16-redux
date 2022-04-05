import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieService from "../services/MovieService";
import { moviesSelector } from "../store/movie/selectors";
import { setMovies } from "../store/movie/slice";
import MovieRow from "./MovieRow";

const MovieList = (props) => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const handleSetMovies = (movies) => dispatch(setMovies(movies));

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await movieService.getAll();

    handleSetMovies(data);
  };

  return (
    <div>
      movies
      {movies.map((movie) => (
        <MovieRow movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
