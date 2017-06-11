import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import CompressionPlugin from 'compression-webpack-plugin'
import WebpackMd5Hash from 'webpack-md5-hash'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path from 'path'
module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    target: 'web',
    entry: {
        vendor: ['react', 'redux', 'react-dom', 'babel-polyfill', 'whatwg-fetch', 'react-router-dom'],
        app: './src/index',
    },
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/react-starter'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader?sourceMap",
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        autoprefixer('last 2 versions', 'ie 10')
                                    ]
                                }
                            }
                        },
                        "sass-loader?sourceMap"
                    ]
                })
            },
            {
                test: /\.json$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
            // { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?name=[name].[ext]' },
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]' },
            // { test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]' },
            // { test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[name].[ext]' },
            // { test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]' },
            // { test: /\.ico$/, loader: 'file-loader?name=[name].[ext]' },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{from: './src/data.json', to:'./data.json'}]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new ExtractTextPlugin("styles.css"),
        new WebpackMd5Hash(),
        //new webpack.optimize.CommonsChunkPlugin('commons'),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            title:'Awesome Shoping',
            favicon: './src/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false,
            noInfo: true,
            options:{
                context: '../'
            }
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
}
