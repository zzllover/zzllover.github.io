const webpack = require('webpack');
const { inDev } = require('./webpack.helpers');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: inDev() ? 'react-app/index-tpl.html' : '_layouts/empty-react-tpl.html',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/react/[name].[chunkhash].css',
    chunkFilename: 'css/react/[name].[chunkhash].chunk.css',
  }),
].filter(Boolean);
