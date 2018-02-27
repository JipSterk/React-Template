import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';

import { commonConfig } from './webpack.common';

const development: webpack.Configuration = webpackMerge(commonConfig, {
    devtool: 'cheap-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&reload=ture',
    ],
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'app', 'index.html')
        })
    ]
});

export =[
    development
];