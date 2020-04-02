const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    EmailsInput: './src/components/emails-input/emails-input.js',
  },
  output: {
    filename: '[name].dist.js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].dist.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // eslint-disable-next-line global-require
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
};
