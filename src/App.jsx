
import MovieList from "./components/MovieList";
import "./index.css";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header>
                <h1>My Movie List</h1>
                <p>Explore and manage your favourite movies.</p>
            </header>

            <main>
                <MovieList />
            </main>
        </div>
    );
}

export default App;
