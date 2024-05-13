import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={s.list}>
        {data.map((film) => (
          <li className={s.listItem} key={film.id}>
            <Link
              to={`/movies/${film.id.toString()}`}
              state={{ from: location }}
            >
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
