import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '2f88dfb09f5afe72bd3cb83b332c8204',
};

export async function getTrendingMovies() {
  const response = await axios.get('/trending/movie/day');
  return response.data;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function getMovieCredits(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}