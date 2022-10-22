import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from 'components/Box';
import {
  Item,
  ItemBold,
  Vote,
  LinkItem,
  BackLink,
} from './MovieDescription.styled';

export const MovieDescription = ({ dataMovie }) => {
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = dataMovie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const IMG_URL = 'https://image.tmdb.org/t/p/w185';

  return (
    <section>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <Box display="flex" p="15px 0" borderBottom="1px solid #d668ff">
        {poster_path && <img src={`${IMG_URL}${poster_path}`} alt={title} />}

        <Box ml="15px">
          <Box as="h2" mb="20px">
            {title || name} ({release_date?.slice(0, 4)})
          </Box>
          <Item>
            <Vote>Vote</Vote> {vote_average.toFixed(1)}
          </Item>
          <ItemBold>Overview</ItemBold>
          <Item>{overview}</Item>
          <ItemBold>Genres</ItemBold>
          <Item>{genres.map(({ name }) => name).join(', ')}</Item>
        </Box>
      </Box>
      <Box p="20px 0" borderBottom="1px solid #d668ff">
        <h2>Additional information</h2>
        <ul>
          <LinkItem>
            {/* Чтобы передать путь в глубину   */}
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </LinkItem>
        </ul>
      </Box>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

MovieDescription.propTypes = {
  dataMovie: PropTypes.object.isRequired,
};
