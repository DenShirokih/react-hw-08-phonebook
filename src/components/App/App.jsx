import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegistrView';
import { Layout } from '../Layout/Layout';
import { ContactsView } from 'views/ContactsView';
import { PrivateRouts } from 'components/PrivateRouts';
import { PublicRoute } from 'components/PublicRoust';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from 'redux/registeSlice';
import { useGetCurrentUserQuery } from 'redux/userApi';
import authSelectors from 'redux/selecors';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data } = useGetCurrentUserQuery(null, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser({ name: data.name, email: data.email }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginView />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRouts>
              <ContactsView />
            </PrivateRouts>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
