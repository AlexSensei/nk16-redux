import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    searchValue: "",
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setMovies, setSearchValue } = movieSlice.actions;

export default movieSlice.reducer;
