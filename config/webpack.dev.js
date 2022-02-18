const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackConfig = require('../webpack.config')

const { paths } = require('./environment')
const path = require('path')

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: paths.public,
    filename: 'static/js/[name].js',
  },
  devServer: {
    open: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
    ],
  },
  target: 'web',
})
