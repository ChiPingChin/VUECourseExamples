﻿const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    app: './app.js',
  },
  devtool: DEV_MODE ? 'source-map' : false,
  // devtool: DEV_MODE ? 'eval-source-map' : false, // vscode chrome debug
  output: {
    path: path.resolve('dist'),
    filename: DEV_MODE ? '[name].js' : '[name].[chunkhash].js',
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/assets'),
      path.resolve('node_modules'), // 這個不能刪喔, 啾咪
    ],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          { loader: 'vue-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              prependData: `$DEV_MODE:${DEV_MODE};`,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[path][name].[ext]?[hash:7]',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'html/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        DEV_MODE,
      },
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'src'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2,
          priority: -20,
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -1,
        },
      },
    },
  },
};
