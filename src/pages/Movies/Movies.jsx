import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import Loader from 'shared/components/Loader';

import { getSearchingOfMovie } from 'shared/api/Api-movies';
import Searchbar from 'pages/Movies/Searchbar';

export default function Movies() {
  const [searchingMovies, setSearchingMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function findMovies() {
      try {
        setLoading(true);
        setError(null);

        const { results } = await getSearchingOfMovie(query);

        setSearchingMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    findMovies();
  }, [query]);

  const onSearch = searchingQuery => {
    setSearchParams(searchingQuery !== '' ? { query: searchingQuery } : {});
    setSearchingMovies([]);
  };

  return (
    <main>
      <Searchbar onSubmit={onSearch} />
      {loading && <Loader />}
      {error && <p>Something went wrong. Please try again later.</p>}

      {searchingMovies.length > 0 && <MoviesList movies={searchingMovies} />}
    </main>
  );
}
