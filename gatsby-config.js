module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svgs/ // do not mix svgs with non-vectors
        }
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    `gatsby-transformer-json`
  ]
};
