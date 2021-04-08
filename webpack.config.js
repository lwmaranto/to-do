"use strict";

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./app/main",
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
};
