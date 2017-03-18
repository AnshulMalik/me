const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/docs',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
     new webpack.LoaderOptionsPlugin({
         minimize: true,
         debug: false
     }),
     new webpack.optimize.UglifyJsPlugin({
         beautify: false,
         mangle: {
             screw_ie8: true,
             keep_fnames: true
         },
         compress: {
             screw_ie8: true
         },
         comments: false
     })
 ]
}
