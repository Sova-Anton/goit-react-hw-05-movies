import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ItemMovie, MovieLink } from './MoviesList.styled';
import Box from 'components/Box';

export default function TrendingMoviesList({ movies }) {
  const location = useLocation();

  return (
    
      <Box as="ul" p="20px 0">
        {movies.map(({ id, title, name }) => {
          return (
            <ItemMovie key={id}>
              <MovieLink to={`/movies/${id}`} state={{from: location}}>{title || name}</MovieLink>
            </ItemMovie>
          );
        })}
      </Box>
    
  );
}

TrendingMoviesList.propTypes = {
  movies:  PropTypes.arrayOf(PropTypes.object).isRequired,
}