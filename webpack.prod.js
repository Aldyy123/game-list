const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode : 'production',
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                sourceMap : true,
                cache: true
            })
        ]
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
})