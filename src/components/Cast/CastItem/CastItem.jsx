import { Name, Character, ImageSizes } from './CastItem.styled';
import PropTypes from 'prop-types'

export default function CastItem({ dataCast }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w185';
  const PLUG =
    'https://img.freepik.com/premium-vector/404-error-web-page-template-with-cute-cat_540634-1.jpg?w=120';

  return dataCast.map(({ name, profile_path, character, id, original_name }) => {
    return (
      <li key={id}>
        <ImageSizes
          src={profile_path ? `${IMG_URL}${profile_path}` : PLUG}
          alt={original_name || name}
          width="100"
        />
        <Name>{original_name || name}</Name>
        <p>
          <Character>Character</Character> {character}
        </p>
      </li>
    );
  });
}

CastItem.propTypes = {
  dataCast:  PropTypes.arrayOf(PropTypes.object).isRequired,
}