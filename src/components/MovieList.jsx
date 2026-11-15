
import MovieItem from "./MovieItem";

function MovieList() {
    const movies = [
        {
            id: 1,
            title: "Black Panther",
            genre: "Action",
            year: 2018
        },
        {
            id: 2,
            title: "The Avengers",
            genre: "Action",
            year: 2012
        },
        {
            id: 3,
            title: "Titanic",
            genre: "Romance",
            year: 1997
        },
        {
            id: 4,
            title: "Spider-Man",
            genre: "Adventure",
            year: 2021
        }
    ];

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
