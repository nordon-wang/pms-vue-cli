const merge = require("webpack-merge");
const path = require("path");

const baseConf = require("./webpack.config.base");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {
  configureBabelLoader,
  configureURLLoader,
  configureCSSLoader
} = require("./utils");

// 本地开发服务器的配置
const devServer = {
  proxy: {
    "/api": "http://localhost:8081"
  },
  contentBase: path.resolve(__dirname, "../dist"),
  hot: true,
  compress: true,
  overlay: true,
  open: true,
  port: 9999
};
module.exports = merge(baseConf, {
  mode: "development",
  devtool: "eval-source-map",
  devServer,
  module: {
    rules: [
      configureBabelLoader(),
      ...configureCSSLoader(),
      ...configureURLLoader()
    ]
  },
  plugins:[
    // new MiniCssExtractPlugin({ // 提取css
    //   filename: '[name].css' // [name] 就是 placeholder 语法
    // }),
    // new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      views: path.resolve(__dirname, '../src/views')
    },
    modules: ["../node_modules", "../src/assets/generated"]
  }
});