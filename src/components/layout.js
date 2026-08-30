import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, SiteHeader, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <>
    <Head />

    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>

        <StyledContent>
          <SiteHeader />
          <div id="content">{children}</div>
          <Footer />
        </StyledContent>
      </ThemeProvider>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
