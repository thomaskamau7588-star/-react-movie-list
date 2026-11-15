
import { useState } from "react";
import MovieItem from "./MovieItem";

function MovieList() {

    const [movies, setMovies] = useState([
        { id: 1, title: "Black Panther", genre: "Action", year: 2018 },
        { id: 2, title: "The Avengers", genre: "Action", year: 2012 },
        { id: 3, title: "Titanic", genre: "Romance", year: 1997 },
        { id: 4, title: "Spider-Man", genre: "Adventure", year: 2021 }
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    // Add Movie
    const handleAddMovie = (event) => {
        event.preventDefault();

        const form = event.target;

        const newMovie = {
            id: Date.now(),
            title: form.title.value,
            genre: form.genre.value,
            year: form.year.value
        };

        setMovies([...movies, newMovie]);

        form.reset();
    };

    // Delete Movie
    const handleDeleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    // Search Movies
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>

            {/* Search Movies */}
            <input
                type="text"
                placeholder="Search movies..."
                className="search-input"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {/* Add Movie Form */}
            <form className="movie-form" onSubmit={handleAddMovie}>
                <input
                    type="text"
                    name="title"
                    placeholder="Movie title"
                    required
                />

                <input
                    type="text"
                    name="genre"
                    placeholder="Movie genre"
                    required
                />

                <input
                    type="number"
                    name="year"
                    placeholder="Release year"
                    required
                />

                <button type="submit">Add Movie</button>
            </form>

            {/* Movie List */}
            <div className="movie-list">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            onDelete={handleDeleteMovie}
                        />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>

        </div>
    );
}

export default MovieList;
