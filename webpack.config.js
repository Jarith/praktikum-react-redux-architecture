/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 8080,
        hot: true,
        compress: true,
        client: {
            overlay: true,
            progress: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                // инлайним свг иконки (без кодирование в base64) для react-inlinesvg
                // он на каждый рендер ходит за исходниками свгшки и они мигают если лежат в отдельных файлах
                test: /\.svg$/i,
                loader: 'svg-url-loader',
                options: {
                    // скинет в отдельный файл все что больше
                    limit: 1000 * 4, // байты
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            components: path.join('src', 'components'),
            pages: path.join('src', 'pages'),
            app: path.join('app'),
        },
        modules: [
            __dirname,
            'src',
            'node_modules',
        ],
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
        }),
        new HtmlWebpackPlugin({
            template: './static/index.html',
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
        },
    },
};
