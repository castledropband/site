import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
  :root {
    --color-primary: #896baf;
    --color-black: #555;
    --color-white: #fff;

    --font-primary: 'Roboto', sans-serif;
    --font-secondary: 'Creepster', sans-serif;

    --font-size-lg: clamp(10rem, 16vw, 24rem);
    --font-size-md: clamp(2.4rem, 1.8vw, 3.4rem);
    --font-size-sm: clamp(1.2rem, 1.5vw, 1.5rem);
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100vw;
  max-width: 120rem;
  padding: 0 2rem;
  overflow: hidden;
`;
