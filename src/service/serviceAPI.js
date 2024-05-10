import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2OWNmOThmNGFkOWEzYTQwNzZkYWNhN2RkNTg5MCIsInN1YiI6IjY2M2QyZjhjYmRjMjJhNDAxNjAxYzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUF47HyQ1_cOM8RXSNbf8E0p9W_V7Xauvhsl4TZyp_0",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// curl --request GET \
// --url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US' \
// --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2OWNmOThmNGFkOWEzYTQwNzZkYWNhN2RkNTg5MCIsInN1YiI6IjY2M2QyZjhjYmRjMjJhNDAxNjAxYzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUF47HyQ1_cOM8RXSNbf8E0p9W_V7Xauvhsl4TZyp_0' \
// --header 'accept: application/json'

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGY2OWNmOThmNGFkOWEzYTQwNzZkYWNhN2RkNTg5MCIsInN1YiI6IjY2M2QyZjhjYmRjMjJhNDAxNjAxYzRlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUF47HyQ1_cOM8RXSNbf8E0p9W_V7Xauvhsl4TZyp_0
