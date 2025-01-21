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
  graphqlTypegen: true,
  plugins: [
    "gatsby-theme-material-ui",
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
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        outputPath: "src/types/gatsby-types.d.ts",
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID, // Sanity 프로젝트 ID
        dataset: process.env.SANITY_DATASET, // 사용 중인 데이터셋 이름 (예: 'production')
        token: process.env.SANITY_TOKEN, // 읽기 전용 API 토큰
        watchMode: true, // 개발 중 실시간 변경 감지
        overlayDrafts: true, // 초안 콘텐츠 표시
      },
    },
  ],
};
