var webpack = require('webpack')
var path = require('path')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(__dirname, 'big.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'big.js',
    path: __dirname + '/dist',
  }
}
