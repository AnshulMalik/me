var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/docs',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['react-hot-loader', 'babel-loader'],
      exclude: /node_modules/
    }]
  }
}
