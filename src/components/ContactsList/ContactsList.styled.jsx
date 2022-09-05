import styled from '@emotion/styled';
import { ReactComponent as Contact } from 'icons/contact.svg';
import { ReactComponent as Update } from 'icons/update.svg';
import { ReactComponent as Delete } from 'icons/delete.svg';
export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1300px;
`;
export const ContactWrapper = styled.li`
  margin-bottom: 15px;
  flex-direction: column;
  align-items: center;
  flex-basis: 18%;
  display: flex;
  border: none;
  border-radius: 15px;
  background-color: antiquewhite;
  margin-right: 20px;
`;

export const BtnWrapper = styled.div`
  padding: 5%;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ContactIcon = styled(Contact)`
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const UpdateIcon = styled(Update)`
  background-color: transparent;
`;
export const DeleteICon = styled(Delete)`
  background-color: transparent;
`;

export const BtnUpdate = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const BtnDelete = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const ContactName = styled.p`
  font-size: 30px;
  font-family: Lato;
  margin-bottom: 10px;
`;
export const ContactNumber = styled.p`
  font-size: 30px;
  font-family: Lato;
  margin-bottom: 40px;
`;
