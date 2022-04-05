import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movieService from "../services/MovieService";
import { selectMovies } from "../store/movie/selectors";
import { setMovies } from "../store/movie/slice";

const MovieList = (props) => {
  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const handleSetMovies = (movies) => dispatch(setMovies(movies));

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await movieService.getAll();

    handleSetMovies(data);
  };

  return <div>MovieList</div>;
};

export default MovieList;
