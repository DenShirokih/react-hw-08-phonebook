import authSelectors from 'redux/selecors';
import { useSelector } from 'react-redux/';
import { useLogoutUserMutation } from 'redux/userApi';
import { useDispatch } from 'react-redux/es/exports';
import { clearState } from 'redux/registeSlice';
import {
  UserStatusWrapper,
  BtnLogOut,
  UsrName,
  LogOutSvg,
} from './UserStatus.styled';

export const UserStatus = () => {
  const dispatch = useDispatch();
  const [sendLogOut] = useLogoutUserMutation();
  const logOut = async () => {
    try {
      await sendLogOut();
      dispatch(clearState());
    } catch (error) {
      console.log(error);
    }
  };
  const UserName = useSelector(authSelectors.getUserName);
  return (
    <UserStatusWrapper>
      <UsrName>Hello,{UserName}</UsrName>

      <BtnLogOut type="button" onClick={() => logOut()}>
        <LogOutSvg />
      </BtnLogOut>
    </UserStatusWrapper>
  );
};
