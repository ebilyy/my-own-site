const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const Nunjucks = require('nunjucks');

const pages = require('./src/data/pages');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const createPages = (pages) => {
  const entries = {};
  pages.forEach((page) => {
    entries[page.path] = {
      import: page.view,
      data: page.data,
    }
  });
  return entries;
};
module.exports = {
  mode: 'development',
  devServer: {
    watchFiles: {
      paths: ['src/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    static: {
      directory: './dist',
      watch: true,
    },
    hot: true,
    port: 9000,
  },
  output: {
    path: path.join(__dirname, 'dist/'),
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: createPages(pages),
      js: {
        // output filename of extracted JS
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS
        filename: 'assets/css/[name].[contenthash:8].css',
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "assets/img", to: "assets/img" },
      ],
    }),
  ],

  module: {
    rules: [
      // HTML templates
      {
        test: /\.html$/,
        loader: HtmlBundlerPlugin.loader, // HTML template loader
        options: {
          preprocessor: (content, { data }) => Nunjucks.renderString(content, data),
        },
      },
      // styles
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      // images
      {
        test: /\.(png|jpe?g|ico|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash:8][ext]',
        },
      },
    ],
  },
};
