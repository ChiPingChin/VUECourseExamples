const path = require('path');


module.exports = {
  stories: ['../../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
  ],
  // https://storybook.js.org/docs/configurations/custom-webpack-config/
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    console.log('configType', configType);
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve('src'),
    });

    // Return the altered config
    return config;
  },
};
