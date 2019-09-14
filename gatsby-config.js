module.exports = {
  siteMetadata: {
    title: `Offline Mapbox`,
    description: `Test of using a PWA built with Gatsby to load Mapbox when offline`,
    author: `@mattmirus`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `offline-mapbox`,
        short_name: `offline-mapbox`,
        start_url: `/`,
        background_color: `#d85c5c`,
        theme_color: `#d85c5c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: `src/serviceworker-mapbox.js`,
      },
    },
  ],
}
