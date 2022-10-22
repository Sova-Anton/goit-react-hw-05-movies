import PropTypes from 'prop-types';
import { AuthorName, AuthorText, AuthorItem } from './ReviewsItem.styled';

export default function ReviewsItem({ reviews }) {
  return reviews.map(({ author, content, id }) => {
    return (
      <AuthorItem key={id}>
        <AuthorText>
          Author: <AuthorName>{author}</AuthorName>{' '}
        </AuthorText>
        <p>{content}</p>
      </AuthorItem>
    );
  });
}

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
