require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log("API : ", process.env.SANITY_API_URL);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  /**
   * @todo
   * set metadata for my resume
   */
  siteMetadata: {
    title: "Gatsby + Vercel",
    siteUrl: "https://gatsby-template.vercel.app/",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "SANITY",
        fieldName: "sanity",
        url: process.env.SANITY_API_URL, // 환경 변수로 URL 로드
      },
    },
  ],
};
