
function MovieItem({ movie, onDelete }) {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>

            <button
                className="delete-button"
                onClick={() => onDelete(movie.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default MovieItem;
