import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    searchValue: "",
    selectedMovies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    toggleSelectMovie: (state, action) => {
      if (state.selectedMovies.some((id) => id === action.payload)) {
        state.selectedMovies = state.selectedMovies.filter(
          (id) => id !== action.payload
        );
      } else {
        state.selectedMovies.push(action.payload);
      }
    },
  },
});

export const { setMovies, setSearchValue, toggleSelectMovie } =
  movieSlice.actions;

export default movieSlice.reducer;
