import { Link, NavigationWrapper } from './Navigation.styled';
import authSelectors from 'redux/selecors';
import { useSelector } from 'react-redux/es/exports';

export const Navigation = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <NavigationWrapper>
      {}
      <Link to="/">Home</Link>
      {!loggedIn && <Link to="register">Register</Link>}
      {loggedIn && <Link to="contacts">Contacts</Link>}
    </NavigationWrapper>
  );
};
