import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsOfMovie } from 'shared/api/Api-movies';
import Box from 'components/Box';
import { NotFoundText } from './Reviews.styled';
import ReviewsItem from './ReviewsItem';
import Loader from 'shared/components/Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        setError(null);
        const { results } = await getReviewsOfMovie(id);

        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <Box p="15px 0">
      {loading && <Loader />}
      {error && <p>Something went wrong. Please try again later.</p>}

      {reviews && <ReviewsItem reviews={reviews} />}
      {reviews && reviews.length === 0 && (
        <NotFoundText>
          We don't have any reviews for this movie, yet. Maybe you want to be
          first?
        </NotFoundText>
      )}
    </Box>
  );
}
