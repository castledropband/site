import * as React from 'react';
import { graphql, useStaticQuery, HeadFC } from 'gatsby';

export const Head: HeadFC = () => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = data.site.siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </>
  );
};
