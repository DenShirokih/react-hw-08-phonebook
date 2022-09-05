import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux/es/exports';
import authSelectors from 'redux/selecors';
import { Welcome } from 'components/Welcome/Welcome';

export const LoginView = () => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLogin ? <Welcome /> : <LoginForm />}</>;
};
