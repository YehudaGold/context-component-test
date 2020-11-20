const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        port: 3000
    },
    entry: './src/App.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/u,
                use: 'babel-loader',
                exclude: /node_modules/u
            },
            {
                test: /\.css$/u,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico|eot|svg|ttf|woff|woff2)$/u,
                use: [{loader: 'url-loader'}]
            }
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            filename: './index.html',
            inject: true,
            template: './src/index.html'
        })
    ],
    resolve: {extensions: ['.js', '.jsx']}
};