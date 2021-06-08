const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const env = require('./config').environment;
const webpack = require('webpack');

let mode = '';
if (env === 'development' || env === 'sandbox' || env === 'test' || env === 'local') {
  mode = 'development';
} else {
  mode = 'production';
}

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  mode: mode,
  module: {
    rules: [
      {
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
        test: /\.jsx?$|.js?$|.ts?$|.tsx?$/,
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve('../wwwroot/'),
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './strings/*.js',
          to: './[name].[hash].[ext]',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  stats: 'normal',
};
