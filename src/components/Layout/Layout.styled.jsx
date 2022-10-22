import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  margin-bottom: 25px;
  box-shadow: 0px 3px 10px 1px rgba(199, 114, 255, 0.3);
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-left: 10px;

  &.active {
    color: white;
    background-color: #54b725;
  }
`;
