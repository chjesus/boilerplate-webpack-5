module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    {
      'postcss-preset-env': {
        atuoprefixer: {
          grid: true,
          cascade: true,
        },
        stage: 3,
        features: true,
      },
    },
  ],
}
