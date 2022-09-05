import styled from '@emotion/styled';
import { ReactComponent as CloseModal } from 'icons/close.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const Modal = styled.div`
  position: relative;
  padding: 24px;
  display: flex;
  text-align: center;
  width: 400px;
  height: 270px;
  background-color: #2c4a52;
  border-radius: 15px;
`;
export const ModalInput = styled.input`
  background-color: #f4ebdb;
  width: 80%;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin-bottom: 15px;
  outline: none;
  padding-left: 15px;
  font-size: 20px;
`;

export const ModalWrapper = styled.div`
  display: flex;
`;
export const BtnCloseModal = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CloseIcon = styled(CloseModal)`
  background-color: transparent;
  color: #f4ebdb;
  width: 30px;
`;
export const Title = styled.h2`
  font-family: Lato;
  color: #f4ebdb;
  font-size: 25px;
  margin-bottom: 20px;
`;
export const BtnUpdate = styled.button`
  font-size: 16px;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #8e9b97;
  color: #f4ebdb;
`;
