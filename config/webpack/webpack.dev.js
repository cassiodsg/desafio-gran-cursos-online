// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(commonConfig, {
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "@/App/index.tsx", // the entry point of our app
  ],
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, Accept, X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    },
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve("src/index.html"),
    }),
  ],
});
