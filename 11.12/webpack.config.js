var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'big-with-react.js'),
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
    filename: 'big-with-react.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2'
  }
}
