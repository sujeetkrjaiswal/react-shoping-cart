import chalk from 'chalk'  // eslint-disable-line import/no-extraneous-dependencies

export const log = (...args) => {
  console.log(...args) // eslint-disable-line no-console
}

export const successLog = (msg, ...args) => {
  log(chalk.green(msg), ...args)
}
export const infoLog = (msg, ...args) => {
  log(chalk.blue(msg), ...args)
}
export const warnLog = (msg, ...args) => {
  log(chalk.yellow(msg), ...args)
}
export const errorLog = (msg, ...args) => {
  log(chalk.red(msg), ...args)
}
