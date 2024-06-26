import s from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { fetchSearchFilm } from "../../service/serviceAPI";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  // const [searchMovie, setSearchMovie] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get("query") || "";
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // if (!searchMovie) return;
    if (!currentSearch) return;
    const fetchData = async () => {
      try {
        const data = await fetchSearchFilm(currentSearch);

        setFilms(data || []);
      } catch (error) {
        console.error("Failed to fetch films:", error);
        setError("Failed to fetch films. Please try again later.");
      }
    };
    fetchData();
  }, [currentSearch]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchFilm = form.elements.searchFilm.value.trim();
    if (searchFilm === "") {
      setError("Please enter a search term!");
      return;
    }
    setError("");
    setSearchParams({ query: searchFilm });
    form.reset();
  };

  return (
    <>
      <div>
        <header className={s.header}>
          <form className={s.form} onSubmit={handleSubmitForm}>
            <div>
              <input
                type="text"
                autoComplete="off"
                name="searchFilm"
                autoFocus
                placeholder="Search images and photos"
                className={s.input}
              />
              <button type="submit" className={s.button}>
                Search
              </button>
            </div>
            {error && <div className={s.error}>{error}</div>}
          </form>
        </header>{" "}
      </div>
      <MovieList data={films} />;
    </>
  );
};

export default MoviesPage;
