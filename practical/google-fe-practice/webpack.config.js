const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
    hot: false,
    open: false,
    proxy: {
      '/api/fe/questions': {
        target: 'https://www.algoexpert.io',
        changeOrigin: true,
        Headers: {
          Host: 'algoexpert.io',
        },
      },
      '/api/fe/submissions': {
        target: 'https://www.algoexpert.io',
        changeOrigin: true,
        Headers: {
          Host: 'algoexpert.io',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html', favicon: 'favicon.ico' }),
  ],
};
