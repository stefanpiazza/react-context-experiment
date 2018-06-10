const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        publicPath: '/'
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/static/images/[name].[ext]'
                }
            }, {
                loader: 'image-webpack-loader'
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    camelCase: true,
                    // Keep same as class definition for now
                    localIdentName: '[local]',
                    importLoaders: 2,
                    modules: true,
                    sourceMap: true
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true
                }
            }, {
                loader: 'sass-loader',
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'stage-0', 'react-hmre']
                }
            }]
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "node_modules"),
                    name: "common",
                    enforce: true
                }
            }
        }
    },
    output: {
        chunkFilename: 'static/scripts/[name].js',
        filename: 'static/scripts/[name].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['common', 'app'],
            filename: 'index.html',
            template: 'src/index.html',
            title: 'React Context Experiment'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}