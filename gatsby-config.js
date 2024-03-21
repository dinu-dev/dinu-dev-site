/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dinu Rodnitchi`,
    siteUrl: `https://dinu.dev`,
    description: `Dinu Rodnitchi's personal website`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-import`)()],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `experience`,
        path: `${__dirname}/src/content/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `education`,
        path: `${__dirname}/src/content/education`,
      },
    },
    `gatsby-transformer-remark`,
  ]
};
