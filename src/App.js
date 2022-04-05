import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { useSelector } from "react-redux";
import { selectedMoviesCount } from "./store/movie/selectors";

function App() {
  const count = useSelector(selectedMoviesCount);

  return (
    <div className="App">
      <MovieSearch />
      <p>Selektovano je {count} filma</p>
      <MovieList />
    </div>
  );
}

export default App;
