import * as React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import { Text, StyledLink, Container } from './style';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container>
        <Text>Looks like you took a wrong turn...</Text>
        <StyledLink to="/">
          <FaArrowLeft />
          <p>Go back</p>
        </StyledLink>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
