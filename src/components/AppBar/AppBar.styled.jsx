import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WrapperAppBar = styled.div`
  margin: 0 auto;
  align-items: center;
  height: 80px;
  background-color: rgb(44, 74, 82);
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  color: #8e9b97;
  margin-left: 36px;
  &.active {
    color: #f4ebdb;
  }
`;
