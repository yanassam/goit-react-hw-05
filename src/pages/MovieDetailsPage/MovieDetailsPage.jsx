import { useEffect, useRef, useState } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { fetchFilmById } from "../../service/serviceAPI";
import s from "./MovieDetailsPage.module.css";

// import MovieCast from "../../components/MovieCast/MovieCast";

const MovieDetailsPage = () => {
  const location = useLocation();
  // const goBackRef = useRef(location.state);

  const backLinkHref = location.state ?? "/";
  console.log(location.state);
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchFilmById(movieId);

      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  if (!movie) return <h1>loarding</h1>;
  return (
    <div>
      <Link to={backLinkHref}>go back</Link>
      <div className={s.film}>
        <div>
          {
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          }
        </div>
        <div>
          <h2>
            {movie.title} (
            {movie.release_date
              ? movie.release_date.substring(0, 4)
              : "Unknown"}
            )
          </h2>
          <h3>Overview </h3>
          <div className={s.overview}>{movie.overview}</div>
          <h3>Genres </h3>
          <div className={s.genres}>
            Genres:{" "}
            {movie.genres
              ? movie.genres.map((genre) => genre.name).join(" ")
              : "No genres listed"}
          </div>
        </div>
      </div>
      <h3 className={s.titleLink}>Additional informaion</h3>
      <div className={s.link}>
        <Link to="cast">cast</Link>
        <Link to="reviews">reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
