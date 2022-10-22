import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.p`
  margin-top: 15px;
`;
export const ItemBold = styled.p`
  margin-top: 20px;
  font-weight: 700;
  color: orange;
`;
export const Vote = styled.span`
  margin-right: 10px;
  font-weight: 700;
  color: orange;
`;
export const LinkItem = styled.li`
  margin-top: 10px;
  margin-left: 30px;
  font-size: 20px;
`;
export const BackLink = styled(Link)`
  border-radius: 20px;

  outline: none;
  cursor: pointer;
  padding: 8px;
  text-decoration: none;
  background-color: #ff4a4a;
  border: none;
  color: white;
  &:hover {
    background-color: #ff0000;
  }
`;