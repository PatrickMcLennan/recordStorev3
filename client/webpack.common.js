/* eslint-disable */
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { resolveTsAliases } = require("resolve-ts-aliases");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          "file-loader",
          {
            loader: `image-webpack-loader`
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: resolveTsAliases(path.resolve("tsconfig.json"))
  }
};
