module.exports = {
  presets: [
    "babel-preset-gatsby",
    [
      "@babel/preset-react",
      {
        runtime: "automatic", // ✅ 자동 JSX 변환 활성화
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@hooks": "./src/hooks",
          "@pages": "./src/pages",
          "@utils": "./src/utils",
          "@styles": "./src/styles",
          "@assets": "./src/assets",
          "@contents": "./src/contents",
        },
      },
    ],
  ],
};
