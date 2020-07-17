const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : {
        app: './src/app.js',
        bootstrap : './src/boostrap/bootstrap.js',
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test : /\.(css|sass|scss)$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader,
                        options : {
                            publicPath : '/style/'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader : 'file-loader',
                    options : {
                        name : "img/[name].[ext]"
                    }
                }]
            }
        ]
    },
    plugins : [
        new HtmlWebpack({
            template : './src/index.html',
            filename : 'index.html',
            chunks : ['bootstrap', 'app']
        }),
        new HtmlWebpack({
            template : './src/game.html',
            filename : 'game.html',
            chunks : []
        }),
        new HtmlWebpack({
            template : './src/pages/home.html',
            filename : 'pages/home.html',
            chunks : []
        }),
        new HtmlWebpack({
            template : './src/pages/games.html',
            filename : 'pages/games.html',
            chunks : []
        }),
        new HtmlWebpack({
            template : './src/pages/blog.html',
            filename : 'pages/blog.html',
            chunks : []
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css'
        })
    ]
}