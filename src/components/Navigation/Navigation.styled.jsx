import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationWrapper = styled.div``;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  color: #8e9b97;
  margin-left: 36px;
  &.active {
    color: #f4ebdb;
  }
`;
