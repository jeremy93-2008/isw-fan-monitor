const WebpackShellPlugin = require('webpack-shell-plugin-next');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { node } = require('webpack');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main/main.js",
        preload: "./src/main/preload.js",
        webapp: "./src/app/app.tsx"
    },
    devtool: 'source-map',
    target: "electron-main",
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: 
    [
        new WebpackShellPlugin({
            onBuildEnd: {
                scripts: ["npm run start:electron"],
                blocking: false,
                parallel: true
            }
        }),
        new HtmlWebpackPlugin(
            {
                inject: false,
                template: "./public/index.html"    
            }
        )
    ],
}