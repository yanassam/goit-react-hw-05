import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFilmCredits } from "../../service/serviceAPI";
import s from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const data = await fetchFilmCredits(movieId);
      setCast(data || []);
    };
    getCast();
  }, [movieId]);
  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.li}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : ""
              }
              alt={actor.profile_path ? actor.name : "No Photo"}
              className={s.actorImage}
            />
            <div>{actor.name}</div>
            <div>Character: {actor.character}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
