const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Zille Muhammad Jafary, Software Engineer',
    description:
      'Software engineer building Laravel and Vue systems since 2017. CRMs, HR and trader portals, Shopify apps and AI integrations. Contracting full time, and founder of TourHub.',
    siteUrl: 'https://zmjafary.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://zmjafary.com',
        // gatsby-plugin-sitemap writes the index inside /sitemap/, so point at it there.
        sitemap: 'https://zmjafary.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Zille Muhammad Jafary',
        short_name: 'zmjafary',
        start_url: '/',
        background_color: config.colors.backgroundDark,
        theme_color: config.colors.background,
        description:
          'Software engineer building Laravel and Vue systems since 2017.',
        lang: 'en',
        display: 'minimal-ui',
        icon: 'src/images/favicons/android-chrome-512x512.png',
        // The Head component owns theme-color, so the plugin must not add a second one.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
