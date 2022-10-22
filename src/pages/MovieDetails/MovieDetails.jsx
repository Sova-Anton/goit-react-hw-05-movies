import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'shared/api/Api-movies';

import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Error } from './MovieDetails.styled';
import Loader from 'shared/components/Loader';

export default function MovieDetails() {
  const [dataMovie, setdataMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const result = await getMovieById(id);

        setdataMovie(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [id]);

  return (
    <main>
      {loading && <Loader />}
      {error && <Error>Something went wrong. Please try again later.</Error>}
      {dataMovie && <MovieDescription dataMovie={dataMovie} />}
    </main>
  );
}
