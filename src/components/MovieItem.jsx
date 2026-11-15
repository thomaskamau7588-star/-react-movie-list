
import { useState } from "react";

function MovieItem({ movie, onDelete, onEdit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(movie.title);
    const [genre, setGenre] = useState(movie.genre);
    const [year, setYear] = useState(movie.year);
    const [posterUrl, setPosterUrl] = useState(movie.posterUrl || "");

    // Save Edited Movie
    const handleSave = (event) => {
        event.preventDefault();

        onEdit(movie.id, {
            title,
            genre,
            year: Number(year),
            posterUrl
        });

        setIsEditing(false);
    };

    return (
        <div className="movie-card">

            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Movie title"
                        required
                    />

                    <input
                        type="text"
                        value={genre}
                        onChange={(event) => setGenre(event.target.value)}
                        placeholder="Genre"
                        required
                    />

                    <input
                        type="number"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                        placeholder="Year"
                        required
                    />

                    <input
                        type="url"
                        value={posterUrl}
                        onChange={(event) => setPosterUrl(event.target.value)}
                        placeholder="Poster image URL"
                    />

                    <button type="submit">Save Changes</button>

                    <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </form>
            ) : (
                <>
                    {posterUrl ? (
                        <img
                            src={posterUrl}
                            alt={`${movie.title} poster`}
                            className="movie-poster"
                        />
                    ) : (
                        <div className="movie-poster-placeholder">
                            🎬
                            <p>Poster coming soon</p>
                        </div>
                    )}

                    <h3>{movie.title}</h3>
                    <p>Genre: {movie.genre}</p>
                    <p>Year: {movie.year}</p>

                    <button onClick={() => setIsEditing(true)}>
                        Edit
                    </button>

                    <button onClick={() => onDelete(movie.id)}>
                        Delete
                    </button>
                </>
            )}

        </div>
    );
}

export default MovieItem;
