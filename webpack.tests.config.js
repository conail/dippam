var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: 'public', filename: 'bundle.js', publicPath: '/'},
  plugins: [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
