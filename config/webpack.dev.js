const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("../webpack.config");

const { paths } = require("./environment");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: paths.build,
    filename: "static/js/bundle.js",
    chunkFilename: "static/js/[name].chunk.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: paths.public,
    historyApiFallback: {
      disableDotRule: true,
      index: "/index.html",
    },
    inline: true,
    contentBasePublicPath: "/",
    publicPath: "/",
    open: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
      chunkFilename: "static/css/main.chunk.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  target: "web",
});
