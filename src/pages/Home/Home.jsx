import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'shared/api/Api-movies';
import TrendingMoviesList from 'components/MoviesList/MoviesList';
import Loader from 'shared/components/Loader';
import { Error } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const { results } = await getTrendingMovies();

        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  if (movies === null) {
    return;
  }

  return (
    <main>
      <h2>Trending today</h2>

      {error && <Error>Something went wrong. Please try again later.</Error>}
      <TrendingMoviesList movies={movies} />
      {loading && <Loader />}
    </main>
  );
}
