import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul className={s.list}>
        {data.map((film) => (
          <li className={s.list} key={film.id}>
            <Link to={`/movies/${film.id.toString()}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
