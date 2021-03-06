const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path')


const src = path.resolve(__dirname, './src/app.jsx');

module.exports = {
  entry: src,
  output: {
    filename: "./bundle/bundle.js",
    library: 'todolist'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  devServer: {
    compress: true,
    port: 8080,
  }
};

console.log(NODE_ENV);
