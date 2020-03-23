/* eslint-disable */

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const path = require("path");
const { ProgressPlugin } = require("webpack");
const ResourceHintWebpackPlugin = require("resource-hints-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"]
      }
    ]
  },
  optimization: {
    namedChunks: true,
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        react: {
          test: /node_modules\/react((\-dom))?\//,
          name: "react",
          chunks: "all"
        },
        select: {
          test: /node_modules\/react-select\//,
          name: "select",
          chunks: "all"
        },
        styledComponents: {
          test: /node_modules\/styled-components\//,
          name: "styled-components",
          chunks: "all"
        },
        toastify: {
          test: /node_modules\/react-toastify\//,
          name: "toastify",
          chunks: "all"
        }
      }
    },
    minimizer: [new TerserPlugin({ parallel: 4 })]
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "public/index.html"),
      template: "./src/template.html",
      inject: "head",
      meta: {
        "application-name": "recordStore",
        robots: "index,follow",
        googlebot: "index,follow",
        rating: "general",
        "theme-color": "#232325"
      },
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      title: "recordStore"
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer"
    }),
    new ResourceHintWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
});
