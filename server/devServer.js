import browserSync from 'browser-sync' // eslint-disable-line import/no-extraneous-dependencies
import historyAPiFallback from 'connect-history-api-fallback' // eslint-disable-line import/no-extraneous-dependencies
import webpack from 'webpack' // eslint-disable-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware' // eslint-disable-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware' // eslint-disable-line import/no-extraneous-dependencies
import config from '../config/webpack.config.dev'

const bundler = webpack(config)
browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: 'src',
    middleware: [
      historyAPiFallback(),
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        noInfo: false,
        quiet: false,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false,
        },

      }),
      webpackHotMiddleware(bundler),
    ],
  },
  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html',
  ],
})
