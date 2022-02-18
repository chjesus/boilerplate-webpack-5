const HtmlWebpackPlugin = require('html-webpack-plugin')

const { paths } = require('./config/environment')

module.exports = {
  entry: './src/app.js',
  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: 'index.html',
      favicon: paths.favicon,
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(handlebars|hbs)$/,
        loader: 'handlebars-loader',
      },
    ],
  },
}
