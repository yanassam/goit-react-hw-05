import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const searchBaseUrl = "https://api.themoviedb.org/3/search/movie";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2OWNmOThmNGFkOWEzYTQwNzZkYWNhN2RkNTg5MCIsInN1YiI6IjY2M2QyZjhjYmRjMjJhNDAxNjAxYzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUF47HyQ1_cOM8RXSNbf8E0p9W_V7Xauvhsl4TZyp_0",
    Accept: "application/json",
  },
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const fetchFilms = async () => {
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchFilmById = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}?language=en-US`;
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchFilmCredits = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}/credits?language=en-US`;
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.error(
      "Error fetching film credits:",
      error.response ? error.response.data : error
    );
    return null;
  }
};

export const fetchFilmReviews = async (movieId) => {
  try {
    const url = `${baseUrl}${movieId}/reviews?language=en-US`;
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(
      "Error fetching film reviews:",
      error.response ? error.response.data : error
    );
    return null;
  }
};

// export const fetchSearchFilm = async (searchMovie) => {
//   try {
//     const url = `${searchBaseUrl}?query=${searchMovie}&include_adult=false&language=en-US&page=1`;
//     // const url = `${baseUrl}?query=${encodeURIComponent(
//     //   searchMovie
//     // )}&include_adult=false&language=en-US&page=1`;

//     const response = await axios.get(url, options);
//     return response.data.results;
//   } catch (error) {
//     console.error(
//       "Error search Movie:",
//       error.response ? error.response.data : error
//     );
//     return null;
//   }
// };

export const fetchSearchFilm = async (searchMovie) => {
  try {
    // const searchBaseUrl = "https://api.themoviedb.org/3/search/movie";
    const url = `${searchBaseUrl}?query=${encodeURIComponent(
      searchMovie
    )}&include_adult=false&language=en-US&page=1`;

    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2OWNmOThmNGFkOWEzYTQwNzZkYWNhN2RkNTg5MCIsInN1YiI6IjY2M2QyZjhjYmRjMjJhNDAxNjAxYzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUF47HyQ1_cOM8RXSNbf8E0p9W_V7Xauvhsl4TZyp_0",
      },
    };

    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(
      "Error searching for a movie:",
      error.response ? error.response.data : error
    );
    return null;
  }
};
