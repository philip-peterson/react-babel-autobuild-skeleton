const path = require('path');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
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
