import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { useDispatch, useSelector } from "react-redux";
import { selectedMoviesCount } from "./store/movie/selectors";
import { deselectAll, selectedAll } from "./store/movie/slice";
import MovieFilter from "./components/MovieFilter";
import { MoviePagination } from "./components/MoviePagination";

function App() {
  const count = useSelector(selectedMoviesCount);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <MovieSearch />
      <p>Selektovano je {count} filma</p>
      <button onClick={() => dispatch(deselectAll())}>Deselect all</button>
      <button onClick={() => dispatch(selectedAll())}>Select all</button>
      <MovieFilter />
      <MovieList />
      <MoviePagination />
    </div>
  );
}

export default App;
