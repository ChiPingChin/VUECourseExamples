const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const DEV_MODE = argv.mode === 'development';
  console.log(`mode:${argv.mode}`);

  const config = {
    context: path.resolve('src'),
    entry: {
      app: './app.js',
    },
    // sourcemap 的產生方式
    devtool: DEV_MODE ? 'inline-source-map' : false,
    output: {
      // 將打包好的檔發佈至 dist 資料夾
      path: path.resolve('dist'),
      // 打包的 js 檔名, [name] 會吃 entry 的名稱
      filename: DEV_MODE ? '[name].js' : '[name].[chunkhash].js',
    },
    resolve: {
      modules: [
        // 讓 webpack 在找套件時，依需由這些路徑開始找
        path.resolve('src'),
        path.resolve('src/assets'),
        path.resolve('node_modules'), // 這個不能刪喔, 啾咪
      ],
      alias: {
        '@': path.resolve('src'),
        vue: 'vue/dist/vue.esm.js',
      },
    },
    module: {
      // Webpack 會依副檔名來決定要用什麼 loader 來處理
      rules: [
        {
          // .js , .jsx 就由 babel-loader 來處理
          // babel 就是將 ES6 等新語法，轉換成向下相容的工具
          test: /\.jsx?$/,
          use: [
            { loader: 'babel-loader' },
          ],
          exclude: /node_modules/,
        },
        {
          // .vue 檔當然就由 vue-loader 來處理
          test: /\.vue$/,
          use: [
            { loader: 'vue-loader' },
          ],
          exclude: /node_modules/,
        },
        {
          // .css 檔, 因為我們是在 .vue 裡寫 style , 所以還需要一個 vue-style-loader 來處理
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
          ],
          exclude: /node_modules/,
        },
        {
          // .scss 檔, 因為我們是在 .vue 裡寫 style , 所以還需要一個 vue-style-loader 來處理
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
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 100,
        minChunks: 1,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            enforce: true,
          },
        },
      },
    },
  };
  return config;
};
