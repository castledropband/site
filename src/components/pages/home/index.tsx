import * as React from 'react';

import media from 'consts/media';
import Layout from 'components/layout';
import { Title, SoundcloudContainer } from './style';

const HomePage = () => {
  return (
    <Layout>
      <Title>CASTLE DROP</Title>
      <SoundcloudContainer>
        <iframe scrolling="no" frameBorder="no" src={media.soundcloudEmbed} />
      </SoundcloudContainer>
    </Layout>
  );
};

export default HomePage;
export { Head } from 'components/head';
