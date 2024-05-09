import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, MoviesPage, MovieDetailsPage, NotFoundPage } from "./pages";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="" element={<MoviesPage />}></Route>
        <Route path="" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
