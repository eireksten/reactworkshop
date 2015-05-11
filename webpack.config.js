var path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: {
  	app: './script/app.es6'
  },
  output: {
  	path: __dirname + "/public",
  	filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css"},
      { test: /\.es6$/, loader: "babel"}
    ]
  },
  resolve: {
    root: path.resolve(__dirname, './client'),
    extensions: ['', '.js', '.es6']
  }
};