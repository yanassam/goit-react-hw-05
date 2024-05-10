// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, MoviesPage, MovieDetailsPage, NotFoundPage } from "./pages";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      {/* Routes-обверка для набора маршрутов */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
