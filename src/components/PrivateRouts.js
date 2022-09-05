import { Navigate, useLocation } from 'react-router-dom';
import authSelectors from 'redux/selecors';
import { useSelector } from 'react-redux';

export const PrivateRouts = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);

  if (!loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
