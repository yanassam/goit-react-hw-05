import MovieList from "../../components/MovieList/MovieList";
import { fetchFilms } from "../../service/serviceAPI";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [films, doFilms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFilms();

        doFilms(data || []);
      } catch (error) {
        console.error("Failed to fetch films:", error);
        setError("Failed to fetch films. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Link to="/movies/id"></Link> */}
      <h1>Trending today</h1>
      <MovieList data={films} />
    </>
  );
};

export default HomePage;
