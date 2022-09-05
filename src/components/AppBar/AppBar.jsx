import { WrapperAppBar } from './AppBar.styled';
import authSelectors from 'redux/selecors';
import { useSelector } from 'react-redux/';
import { Navigation } from 'components/Navigation/Navigation';
import { UserStatus } from 'components/UserStatus/UserStatus';

export const AppBar = () => {

  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  // const UserName = useSelector(authSelectors.getUserName);
  return (
    <WrapperAppBar>
      <Navigation />
      {isLogin && <UserStatus />}
    </WrapperAppBar>
  );
};
