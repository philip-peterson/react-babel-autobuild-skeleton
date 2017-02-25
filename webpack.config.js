const path = require('path');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyGreatLibrary',
  },
  module: {
    rules: [
      {
         test: /\.(js|jsx)$/,
         use: 'babel-loader',
         exclude: /node_modules/,
      },
    ]
  }
};

module.exports = config;
