import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'CASTLE DROP',
    description: 'Official site for Castle Drop',
    siteUrl: 'https://castledrop.band',
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-emotion', 'gatsby-plugin-root-import'],
};

export default config;
