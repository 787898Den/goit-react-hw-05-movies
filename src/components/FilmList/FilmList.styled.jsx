import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled(Link)`
  font-size: 16px;
  color:rgba(237, 55, 0, 0.822)
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;