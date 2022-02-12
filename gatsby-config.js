module.exports = {
  siteMetadata: {
    title: "Mirror's Edge™ Catalyst Redesign",
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-toml',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Mirror's Edge Catalyst Redesign`,
        short_name: 'MEC:Redesign',
        start_url: '/',
        background_color: '#f9eaeb',
        theme_color: '#C71C25',
        display: 'standalone',
        icon: 'src/images/mecr-icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-plugin-netlify',
  ],
}
