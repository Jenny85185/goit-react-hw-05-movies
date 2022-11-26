import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { AppBarDiv, BoxLayout } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <BoxLayout>
      <AppBarDiv>
        <AppBar />
      </AppBarDiv>
 <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </BoxLayout>
  );
};