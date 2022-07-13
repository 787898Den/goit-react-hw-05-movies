import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  color: white;
  border-radius: 10px;
  background-color: rgb(113, 169, 176);
  padding: 5px;
  margin-left: 25px;
  margin-bottom: 25px;
  &:hover,
  &:focus {
    color: red;
  }
`