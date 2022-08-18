import { Link } from 'gatsby';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Text = styled.p`
  font-size: 2rem;
  font-family: var(--font-primary);
  color: var(--color-black);
  text-align: center;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  font-size: 2rem;
  font-family: var(--font-primary);
  color: var(--color-primary);
  border: none;
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  :hover,
  :active,
  :focus {
    p {
      border-bottom: 2px solid var(--color-primary);
    }
  }

  p {
    border-bottom: 2px solid transparent;
    transition: border linear 100ms;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;
