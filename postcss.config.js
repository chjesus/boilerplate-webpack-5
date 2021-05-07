const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    autoprefixer({
      grid: true,
      cascade: true,
    }),
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
