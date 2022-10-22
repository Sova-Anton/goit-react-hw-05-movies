import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemMovie = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const MovieLink = styled(Link)`
  color: #5674fe;
  &:hover {
    color: orange;
  }
`;
