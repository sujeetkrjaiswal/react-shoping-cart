import cart from './cart'
import items from './items'
import itemsFetch from './itemsFetchStatus'
import toast from './toast'

import {
  STORE_KEY_CART,
  STORE_KEY_FETCH_STATUS,
  STORE_KEY_ITEMS,
  STORE_KEY_TOAST,
} from '../actions/const'

export default {
  [STORE_KEY_CART]: cart,
  [STORE_KEY_FETCH_STATUS]: itemsFetch,
  [STORE_KEY_ITEMS]: items,
  [STORE_KEY_TOAST]: toast,
}
