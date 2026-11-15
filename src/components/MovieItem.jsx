
function MovieItem({ movie }) {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.year}</p>
        </div>
    );
}

export default MovieItem;
