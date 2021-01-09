const API_KEY = '8474014efb37e489ad1a5299e6ae7a88';

const requests = {
  fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchTVMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;
