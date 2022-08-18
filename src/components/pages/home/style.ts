import styled from '@emotion/styled';
import breakpoints from 'consts/breakpoints';

export const Title = styled.h1`
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  color: var(--color-primary);
  margin-top: 4rem;
  text-align: center;

  @media (min-width: ${breakpoints.sm}) {
    margin-top: 6rem;
  }
`;

export const SoundcloudContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 8rem 0 6rem 0;

  iframe {
    width: 100%;
    max-width: 48rem;
    height: 48rem;
    border-radius: 4px;
  }
`;
