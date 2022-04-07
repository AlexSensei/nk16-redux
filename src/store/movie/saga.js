import { call, takeLatest } from "redux-saga/effects";
import { getMovies } from "./slice";

function* getMoviesHandler() {
  yield call(console.log, "hello from get movies saga");
}

function getMovieHandler(action) {
  console.log("Get movie with id ", action.payload);
}

export function* watchForSagas() {
  yield takeLatest(getMovies.type, getMoviesHandler);
}
