const rules = require('./webpack.rules.cjs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin').default

rules.push(
  {
    test: /\.(png|jpg|gif|svg)$/iu,
    use: 'url-loader',
  },
  {
    test: /\.css$/u,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
  },
)

module.exports = {
  module: {
    rules,
  },
  // Do not create source maps
  devtool: false,
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'shared/index.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    plugins: [new ResolveTypeScriptPlugin()],
  },
}
