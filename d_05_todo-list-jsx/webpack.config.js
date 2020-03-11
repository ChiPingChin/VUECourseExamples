const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const launchEditorMiddleware = require('launch-editor-middleware');

const DEV_MODE = process.env.NODE_ENV === 'development';
console.log(`DEV_MODE:${DEV_MODE}`);

module.exports = {
  context: path.resolve('src'),
  mode: process.env.NODE_ENV,
  entry: {
    app: './app.js',
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
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
              prependData: `$DEV_MODE: ${DEV_MODE};`,
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
            limit: 2048,
            name: '[path][name].[ext]?[hash:7]',
            esModule: false,
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
  ],
  devServer: {
    before(app) {
      app.use('/__open-in-editor', launchEditorMiddleware(null, 'src', () => console.log(
        'To specify an editor, specify the EDITOR env variable or '
          + 'add "editor" field to your Vue project config.\n',
      )));
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: './src',
    stats: 'minimal',
    host: '0.0.0.0',
    disableHostCheck: true,
  },
};
