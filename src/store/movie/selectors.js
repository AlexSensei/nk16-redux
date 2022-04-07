export const searchValueSelector = (state) => state.movie.searchValue;

export const moviesSelector = (state) => {
  const filter = state.movie.searchValue;
  const sortBy = state.movie.sortBy;
  let movies = state.movie.movies;

  movies = movies.filter((movie) => movie.title.includes(filter));

  switch (sortBy) {
    case "nameAsc":
      return movies.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    case "nameDesc":
      return movies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
    case "durationAsc":
      return movies.sort((a, b) => a.duration - b.duration);
    case "durationDesc":
      return movies.sort((a, b) => b.duration - a.duration);
  }

  return movies;
};

export const isMovieSelected = (state, id) => {
  return state.movie.selectedMovies.some((movie) => movie === id);
};

export const selectedMoviesCount = (state) => state.movie.selectedMovies.length;
