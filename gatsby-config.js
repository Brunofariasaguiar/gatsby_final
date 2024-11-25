/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Apresentação final do Gatsby`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-plugin-mdx",
    //"@gatsbyjs/plugin-mdx",
  ],
};
