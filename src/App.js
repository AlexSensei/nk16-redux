import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <div className="App">
      <MovieSearch />
      <MovieList />
    </div>
  );
}

export default App;
