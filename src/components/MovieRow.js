import React from "react";

const MovieRow = ({ movie }) => {
  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Director: {movie.director}</p>
      <img src={movie.imageUrl} />
      <p>Release date: {movie.releaseDate}</p>
      <p>Genre: {movie.genre}</p>
      <p>Duration: {movie.duration}</p>
    </div>
  );
};

export default MovieRow;
