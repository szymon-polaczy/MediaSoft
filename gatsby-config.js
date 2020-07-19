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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      },
    },
  ],

  siteMetadata: {
    title: `MediaSoft`,
    author: `Szymon Polaczy`,
    description: `MediaSoft Nysa oferuje: strony WWW, strony internetowe, serwery wirtualne, serwery, hosting, domeny, 
                  rejestracja domen, pozycjonowanie stron, pozycjonowanie, rejestracja stron w katalogach, 
                  ręczne katalogowanie stron, zwiększanie PageRank, WebMonitoring.`,
    keywords: `nysa, strony www, strony internetowe, serwery wirtualne, serwer wirtualny, hodsting, pozycjonowanie, 
              pozycjonowanie stron, serwery, domeny, rejestracja domen, katalogowanie stron, rejestracja w katalogach, 
              rejestracja stron w katalogach, linki sponsorowane, pagerank, zwiększanie pagerank`,
  }
}
