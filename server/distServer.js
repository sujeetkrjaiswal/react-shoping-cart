import browserSync from 'browser-sync' // eslint-disable-line import/no-extraneous-dependencies
import historyApiFallback from 'connect-history-api-fallback' // eslint-disable-line import/no-extraneous-dependencies
import { infoLog } from '../tools/logger'

infoLog('Opening production build...')

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001,
  },
  server: {
    routes: {
      '/react-shoping-cart/': 'dist',
    },
    baseDir: 'dist',
  },
  files: [
    'src/*.html',
  ],

  middleware: [historyApiFallback()],
})
