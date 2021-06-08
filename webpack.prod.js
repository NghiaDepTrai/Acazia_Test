const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const time = new Date().getTime();
module.exports = merge(require("./webpack.config")("production"), {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  output: {
    filename: "scripts/panorama.[name].[hash]" + time + ".bundle.js",
    sourceMapFilename: "scripts/panorama.[name].[chunkhash]" + time + ".bundle.map",
    chunkFilename: "scripts/panorama.[id].[chunkhash]" + time + ".chunk.js",
    path: path.resolve(__dirname, "./build/dist")
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
