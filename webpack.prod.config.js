const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main/main.js',
        preload: './src/main/preload.js',
        webapp: './src/app/index.tsx',
    },
    devtool: 'source-map',
    target: 'electron-main',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './public/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: './src/scripts/readEC.py', to: 'readEC.py' }],
        }),
    ],
}
