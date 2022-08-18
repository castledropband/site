import styled from '@emotion/styled';
import breakpoints from 'consts/breakpoints';

export const MainContainer = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: 2rem 4rem;
  gap: 2rem;
  width: 100%;
  max-width: 72rem;
  color: var(--color-black);
  font-size: var(--font-size-sm);
  font-family: var(--font-primary);

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: inherit;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const SocialLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color linear 100ms;

  :hover,
  :active,
  :focus {
    outline: none;
    color: var(--color-primary);
  }

  & > svg {
    height: 2rem;
    width: 2rem;
  }
`;
