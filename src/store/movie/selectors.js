export const searchValueSelector = (state) => state.movie.searchValue;
export const moviesSelector = (state) => {
  const filter = state.movie.searchValue;
  const movies = state.movie.movies;

  return movies.filter((movie) => movie.title.includes(filter));
};
