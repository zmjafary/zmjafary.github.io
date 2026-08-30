import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // Person schema so search engines can attribute the work to a real person.
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zille Muhammad Jafary',
    alternateName: 'Jerry',
    url: siteUrl,
    image: seo.image,
    email: 'mailto:me@zmjafary.com',
    jobTitle: 'Software Engineer',
    description: seo.description,
    knowsAbout: [
      'Laravel',
      'PHP',
      'Vue.js',
      'Inertia.js',
      'React',
      'Node.js',
      'Shopify',
      'AWS',
      'DevOps',
      'OpenAI',
    ],
    sameAs: [
      'https://github.com/zmjafary',
      'https://www.linkedin.com/in/zmjafary',
      'https://www.instagram.com/zmjafary',
      'https://www.facebook.com/zmjafary',
    ],
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Zille Muhammad Jafary" />
      <meta name="theme-color" content="#121316" />
      <meta name="color-scheme" content="dark" />

      <meta property="og:site_name" content="Zille Muhammad Jafary" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content="Zille Muhammad Jafary, software engineer" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&display=swap"
      />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-T5TKLHCFBD" />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T5TKLHCFBD');
        `}
      </script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
