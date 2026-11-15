
import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList() {

    // Load Movies from Local Storage
    const [movies, setMovies] = useState(() => {
        const savedMovies = localStorage.getItem("movies");

        return savedMovies ? JSON.parse(savedMovies) : [
            { id: 1, title: "Black Panther", genre: "Action", year: 2018 },
            { id: 2, title: "The Avengers", genre: "Action", year: 2012 },
            { id: 3, title: "Titanic", genre: "Romance", year: 1997 },
            { id: 4, title: "Spider-Man", genre: "Adventure", year: 2021 }
        ];
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All Genres");

    // Save Movies to Local Storage
    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    // Add Movie
    const handleAddMovie = (event) => {
        event.preventDefault();

        const form = event.target;

        const newMovie = {
            id: Date.now(),
            title: form.title.value,
            genre: form.genre.value,
            year: Number(form.year.value)
        };

        setMovies([...movies, newMovie]);
        form.reset();
    };

    // Delete Movie
    const handleDeleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    // Edit Movie
    const handleEditMovie = (id, updatedMovie) => {
        setMovies(movies.map((movie) =>
            movie.id === id
                ? { ...movie, ...updatedMovie }
                : movie
        ));
    };

    // Get Available Genres
    const genres = [
        "All Genres",
        ...new Set(movies.map((movie) => movie.genre))
    ];

    // Search and Filter Movies
    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesGenre =
            selectedGenre === "All Genres" ||
            movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

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

            {/* Filter by Genre */}
            <select
                className="genre-filter"
                value={selectedGenre}
                onChange={(event) => setSelectedGenre(event.target.value)}
            >
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

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
                            onEdit={handleEditMovie}
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
