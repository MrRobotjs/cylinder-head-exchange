const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Cylinder Head Exchange`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Christopher Ramos`,
    siteUrl: `https://cylinderheadexchangeshop.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Racing Sans One",
              fontDisplay: 'auto',
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: `true`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wrq7kfp3sfuu`,
        accessToken: `A_-ww2pytdJc7YJg2A9ukPjdXf426Kz0NQyn6EGIvIE`,
        host: `cdn.contentful.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-layout`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cylinder Head Exchange`,
        short_name: `CHX`,
        start_url: `/`,
        background_color: `#ff2b3c`,
        theme_color: `#ff2b3c`,
        display: `standalone`,
        icon: `src/images/FaviconC512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
