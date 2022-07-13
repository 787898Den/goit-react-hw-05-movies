import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  padding: 10px;
  gap: 20px;
 
`;

export const StyledLink = styled(NavLink)`
  font-weight: 500;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  color: white;
  background-color: rgb(113, 169, 176);
  &.active {
    color: red;
  }
`;