import { STORE_KEY_LOCALSTORAGE } from '../actions/const'

const browserLog = (...args) => {
  console.log(...args) // eslint-disable-line no-console
}

const localStorageMiddleware = ({ getState }) => next => (action) => {
  browserLog('will dispatch', action)
  const returnValue = next(action)
  localStorage.setItem(STORE_KEY_LOCALSTORAGE, JSON.stringify(getState()))
  browserLog('state after dispatch', getState())
  return returnValue
}

export default localStorageMiddleware
