const common = require('./webpack.common.js');
const Merge = require('webpack-merge');

module.exports = Merge(common, {
    mode : 'development'
})