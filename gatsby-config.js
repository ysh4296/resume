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
  presets: ["babel-preset-gatsby"],
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-material-ui",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@pages": "./src/pages",
          "@utils": "./src/utils",
          "@styles": "./src/styles",
          "@assets": "./src/assets",
        },
      },
    ],
  ],
};
