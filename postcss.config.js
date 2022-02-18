module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    {
      autoprefixer: {
        grid: true,
        cascade: true,
      },
    },
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
