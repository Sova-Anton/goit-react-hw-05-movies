import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastOfMovie } from 'shared/api/Api-movies';
import CastItem from './CastItem';
import Loader from 'shared/components/Loader';
import { Thumb, Error } from './Cast.styled';

export default function Cast() {
  const [dataCast, setDataCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(null);

        const { cast } = await getCastOfMovie(id);

        setDataCast(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [id]);

  if (!dataCast) {
    return;
  }

  return (
    <section>
      <Thumb>
        {loading && <Loader />}
        {error && <Error>Something went wrong. Please try again later.</Error>}
        <CastItem dataCast={dataCast} />
      </Thumb>
    </section>
  );
}
