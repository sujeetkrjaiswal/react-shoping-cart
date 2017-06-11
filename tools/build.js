import webpack from 'webpack' // eslint-disable-line import/no-extraneous-dependencies
import config from '../config/webpack.config.prod'
import {
  log,
  successLog,
  infoLog,
  warnLog,
  errorLog,
} from './logger'

process.env.NODE_ENV = 'production'

infoLog('Generating minified bundle. Please wait')
webpack(config).run((error, stats) => {
  if (error) {
    errorLog('Webpack Build Fail', error)
    return 1
  }
  const jsonStats = stats.toJson()
  if (jsonStats.hasErrors) {
    errorLog('Following Errors has been generated')
    return jsonStats.errors.forEach(e => log(e))
  }
  if (jsonStats.hasWarnings) {
    warnLog('Webpack has following warnings')
    jsonStats.warnings.forEach(w => log(w))
  }
  infoLog(`Webpack Stats ${stats}`)
  successLog('Bundling finished in production mode')
  return 0
})
