const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = (env, argv) => {
  const DEV_MODE = argv.mode === 'development';
  console.log(`mode:${argv.mode}`);

  const config = {
    context: path.resolve('src'),
    entry: {
      app: './main.js',
    },
    devtool: DEV_MODE ? 'inline-source-map' : false,
    output: {
      path: path.resolve('dist'),
      filename: DEV_MODE ? 'assets/js/[name].js' : 'assets/js/[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      modules: [
        path.resolve('src'),
        path.resolve('src/assets'),
        path.resolve('node_modules'),
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
          oneOf: [
            {
              resourceQuery: /module/,
              use: [
                'vue-style-loader',
                {
                  loader: 'css-loader',
                },
              ],
            },
            {
              use: [
                'vue-style-loader',
                'css-loader',
              ],
            },
          ],
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
                data: `
                  $DEV_MODE:${DEV_MODE};
                `,
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
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]',
          },
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
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].css',
      }),

      ...DEV_MODE
        ? []
        : [
          new CleanWebpackPlugin(),
        ],

    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          elementUI: {
            name: 'elementUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
          },
          commons: {
            name: 'commons',
            test: resolve('src'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
      ],
    },
    devServer: {
      port: 3000,
      hot: true,
    },
  };
  return config;
};
