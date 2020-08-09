module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mediasoft`,
        short_name: `mediasoft`,
        description: `Strona firmy Mediasoft ofeerująca strony WWW, hosting,  
          domeny, pozycjonwanie, google ads i wiele więcej`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#5588bb`,
        display: `standalone`,
        lang: `pl`,
        icons: [
          {
            src: `/favicon.ico`,
            sizes: `64x64`,
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
  ],

  siteMetadata: {
    lang: `pl`,
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
