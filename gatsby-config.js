module.exports = {
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`
      }
    },
    `gatsby-transformer-json`
  ]
};
