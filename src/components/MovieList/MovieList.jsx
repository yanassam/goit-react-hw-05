import { Link } from "react-router-dom";

const MovieList = () => {
  return (
    <div>
      <Link to="/movies/123">123</Link>
      <Link to="/movies/555">555</Link>
      <Link to="/movies/777">777</Link>
      <Link to="/movies/888">888</Link>
    </div>
  );
};

export default MovieList;
