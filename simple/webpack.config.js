var path = require('path');

module.exports = {
  entry: {
    client: "./src/js/client.js"
  },
  output: {
    path: __dirname + "/bundle/",
    filename: "[name].min.js"
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  },
};
