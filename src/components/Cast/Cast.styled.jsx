import styled from 'styled-components';

export const Thumb = styled.ul`
  padding: 20px 0;
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 15px;
`;
export const Error = styled.p`
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #f5576a;
`;
