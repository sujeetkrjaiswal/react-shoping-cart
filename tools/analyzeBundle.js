import webpack from 'webpack' // eslint-disable-line import/no-extraneous-dependencies
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer' // eslint-disable-line import/no-extraneous-dependencies
import config from '../config/webpack.config.prod'
import { infoLog } from './logger'

config.plugins.push(new BundleAnalyzerPlugin())

const compiler = webpack(config)

compiler.run((error, stats) => {
  if (error) {
    throw new Error(error)
  }
  infoLog(stats)
})
