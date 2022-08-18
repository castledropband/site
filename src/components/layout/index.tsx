import * as React from 'react';
import { Global } from '@emotion/react';

import Footer from 'components/footer';
import { globalStyles, LayoutContainer, ContentContainer } from './style';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <LayoutContainer>
        <ContentContainer>{children}</ContentContainer>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
