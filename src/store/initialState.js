import {
  STORE_KEY_CART,
  STORE_KEY_ITEMS,
  STORE_KEY_FETCH_STATUS,
  STORE_KEY_TOAST,
  STORE_KEY_LOCALSTORAGE,

  ACTION_FETCH_STATUS_NOSTART,
} from '../actions/const'


const initialStore = {
  [STORE_KEY_CART]: {},
  [STORE_KEY_ITEMS]: [],
  [STORE_KEY_FETCH_STATUS]: ACTION_FETCH_STATUS_NOSTART,
  [STORE_KEY_TOAST]: {
    visible: false,
    msg: '',
  },
}
function getInitialStore() {
  try {
    const rawdata = localStorage.getItem(STORE_KEY_LOCALSTORAGE)
    if (rawdata !== null) {
      return JSON.parse(rawdata)
    }
    return initialStore
  } catch (e) {
    return initialStore
  }
}
const initalState = getInitialStore()
export default initalState
