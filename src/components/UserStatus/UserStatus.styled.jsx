import styled from '@emotion/styled';
import { ReactComponent as LogOut } from 'icons/logout.svg';
export const UserStatusWrapper = styled.div`
  align-items: center;
  margin-right: 40px;
  display: flex;
  max-width: 100%;
`;
export const BtnLogOut = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
`;
export const UsrName = styled.p`
  font-family: Lato;
  font-size: 22px;
  margin-right: 5px;
  color: #f4ebdb;
  margin-right: 14px;
`;
export const LogOutSvg = styled(LogOut)``;
