import { useEffect, useRef, useState } from "react";
import { Outlet, useParams, NavLink, useLocation } from "react-router-dom";
import { fetchFilmById } from "../../service/serviceAPI";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBackRef = useRef(location.state?.from ?? "/");

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
      <NavLink to={goBackRef.current} className={s.backLink}>
        go back
      </NavLink>
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
        <NavLink
          to="cast"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
