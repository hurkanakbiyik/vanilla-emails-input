if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      // eslint-disable-next-line global-require,import/no-extraneous-dependencies
      require('autoprefixer'),
      // eslint-disable-next-line global-require,import/no-extraneous-dependencies
      require('cssnano'),
      // More postCSS modules here if needed
    ],
  };
}
