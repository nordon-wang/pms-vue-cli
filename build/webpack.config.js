const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const StyleLintPlugin = require("stylelint-webpack-plugin")
const SpritesmithPlugin = require("webpack-spritesmith");

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle-[hash:8].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8092,
              name: 'img/[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8092,
              name: 'media/[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8092,
              name: 'font/[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter')
        },
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ // 提取css
      filename: '[name].css' // [name] 就是 placeholder 语法
    }),
    new StyleLintPlugin({ // stylelint 配置
      files: ["src/**/*.{vue,css,scss,sass}"]
    }),
    new SpritesmithPlugin({ // 雪碧图
      src: { // 指定那些图片需要合成雪碧图
        cwd: path.resolve(__dirname, "src/assets/sprites"), // 原始图片所在的目录
        glob: "*.png" // 匹配规则，符合匹配规则的图片才会生成雪碧图
      },
      target: { // 文件输出目录
        image: path.resolve(__dirname, "src/assets/generated/sprite.png"), // 指定生成的雪碧图放在那里
        css: path.resolve(__dirname, "src/assets/generated/sprite.scss") // 指定生成的css文件放在那里 
      },
      apiOptions: {
        cssImageRef: "~sprite.png" // apiOptions 中的 cssImageRef 是一个雪碧图的路径，CSS 文件中将使用该路径用作背景图。例如 .ico{background-image: url(~sprite.png)}
      }
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCssAssetsPlugin({})]
  },
  resolve: {
    alias: {
      views: path.resolve(__dirname, 'src/views')
    },
    modules: ["node_modules", "assets/generated"]
  },
  devServer: {
    hot: true,
    open: true,
    port: 8927,
    compress: true,
    contentBase: './src'
  },
  devtool: 'eval-source-map'
};
