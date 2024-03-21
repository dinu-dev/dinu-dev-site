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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-Q893ZT7J0J",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "dinu.dev",
        // defaults to false
        enableWebVitalsTracking: false,
      },
    },
  ]
};
