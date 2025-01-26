import React from 'react';
import { PropsWithChildren } from 'react';
import { CssBaseline } from '@mui/material';
import Header from '../../components/header/Header.tsx';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />

        <main>{children}</main>
        {/*<Footer />*/}
      </div>
    </>
  );
};

export default Layout;
