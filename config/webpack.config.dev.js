import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
export default {
    devtool: 'eval-source-map',
    resolve: {
        // root: path.resolve(__dirname, "../src"),
        extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index',
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    emitError: true,
                    emitWarning: true,
                    failOnWarning: false,
                    failOnError: false
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                // exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader?sourceMap",
                    "sass-loader?sourceMap"
                ]
            },
            {
                test: /\.json$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
            // { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader' },
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            // { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
            // { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
            // { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './src/data.json', to: './data.json' }]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            title: 'Awesome Shoping',
            filename: 'index.html',
            template: './src/index.ejs',
            inject: true,
            favicon: './src/favicon.ico'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: false,
            options: {
                context: '../'
            }
        })
    ]
}
