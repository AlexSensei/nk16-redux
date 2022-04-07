export const searchValueSelector = (state) => state.movie.searchValue;

export const moviesSelector = (state) => {
  const filter = state.movie.searchValue;
  const sortBy = state.movie.sortBy;
  let movies = state.movie.movies;

  movies = movies.filter((movie) => movie.title.includes(filter));

  switch (sortBy) {
    case "nameAsc":
      movies = movies.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    case "nameDesc":
      movies = movies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
    case "durationAsc":
      movies = movies.sort((a, b) => a.duration - b.duration);
    case "durationDesc":
      movies = movies.sort((a, b) => b.duration - a.duration);
  }

  return movies.slice((state.movie.pageNo - 1) * 5, state.movie.pageNo * 5);
};

export const isMovieSelected = (state, id) => {
  return state.movie.selectedMovies.some((movie) => movie === id);
};

export const selectedMoviesCount = (state) => state.movie.selectedMovies.length;

export const selectMoviePage = (state) => state.movie.pageNo;

export const hasNextPage = (state) =>
  state.movie.pageNo * 5 < state.movie.movies.length;
