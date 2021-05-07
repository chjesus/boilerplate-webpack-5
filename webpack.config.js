const HtmlWebpackPlugin = require("html-webpack-plugin");

const { paths } = require("./config/environment");

module.exports = {
  entry: "./src/app.js",
  resolve: {
    extensions: [".js", ".css", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
      inject: "body",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        // type: "asset/inline",
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // type: "asset/inline",
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["url-loader"],
        type: "javascript/auto",
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: "handlebars-loader",
      },
    ],
  },
};
