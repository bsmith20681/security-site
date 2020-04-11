module.exports = {
  siteMetadata: {
    title: "Your Home Security Expert",
    titleTemplate: "%s | yourhomesecurityexpert.com",
    description:
      "Reviews and guides for Finding the best home security system for you.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-161943854-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-plugin-react-helmet`,
  ],
}
