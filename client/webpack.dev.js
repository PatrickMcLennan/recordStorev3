/* eslint-disable */

const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "app.js"
  },
  devServer: {
    historyApiFallback: true,
    // open: true,
    overlay: true,
    port: 8080,
    stats: "minimal"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader", "stylelint-custom-processor-loader"]
      },
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        loader: ["source-map-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        sourceMap: true
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/template.html"),
      inject: "body"
    })
  ],
  devtool: "source-map"
});
