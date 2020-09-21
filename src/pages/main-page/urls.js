const API_KEY = "37a5d964e3a3c278a85979cf32004dd7";

const urls = {
  fetchSerial: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  fetchOriginal: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=28%2C12`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1&with_genres=99`,
  fetchPopularToday: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
};

export default urls;
