module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `4bf667b6fd790940437152b16c65a9`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],

  siteMetadata: {
    title: `MediaSoft`,
  }
}
