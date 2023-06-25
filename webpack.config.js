const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true //每次打包前清空目录
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      // 启用 css module 模块
      {
        test: /\.css$/,
        use:[
          'style-loader',
          {
            loader: "css-loader",
            options: {
              // modules: true,
              // 定制hash类名
              modules: {
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          }
        ],
        exclude: /styles/
      },
      // 不启用 css module 模块
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ],
        include: /styles/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html')
    })
  ],
  devServer: {
    port: 8080, // 端口
    open: true, // 自动打开
    compress: true //启用gzip压缩
  }
}