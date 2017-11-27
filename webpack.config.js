
const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        index: path.join(__dirname, './src/components/index.js')
    },
    output: {
        path: path.join(__dirname, './js'),
        filename: '[name].build.js',
        publicPath: '/assets/'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                query: {
                    presets: ['vue', 'es2015', 'stage-2'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader"
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            },
        ]
    },
};