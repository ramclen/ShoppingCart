var path = require('path');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');
console.log("bundle will be deployed on: " + path.resolve(__dirname, 'dist'));

module.exports = {
    context: __dirname,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3030',
        'webpack/hot/only-dev-server',
        './index.js',
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        publicPath : "/"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias:{ react:'react' },
        extensions: ['.js', '.jsx'],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new WriteFilePlugin()
    ],
    devServer: {
        hot:true,
        port:"3030",
        publicPath: "/",
        contentBase: './',
        // proxy: {
        //     "/api/*":"http://localhost:3000",
        //     "/artists":"http://localhost:3000"
        // }
    },
};