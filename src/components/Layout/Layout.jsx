import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
export const Layout = () => {
  return (
    <div>
      <AppBar />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </div>
  );
};
