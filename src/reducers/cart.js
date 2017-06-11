import {
  ACTION_CART_ADD_ITEM,
  ACTION_CART_REMOVE_ITEM,
  ACTION_CART_SET_ITEM_COUNT,
  ACTION_CART_DECREMENT_ITEM_COUNT,
  ACTION_CART_INCREMENT_ITEM_COUNT,
} from '../actions/const'

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_CART_ADD_ITEM:
    case ACTION_CART_INCREMENT_ITEM_COUNT:
      return {
        ...state,
        [action.itemId]: 1 + (state[action.itemId] || 0),
      }
    case ACTION_CART_DECREMENT_ITEM_COUNT:
      if (action.itemId in state) {
        return {
          ...state,
          [action.itemId]: state[action.itemId] - 1 >= 0 ? state[action.itemId] - 1 : 0,
        }
      }
      return state
    case ACTION_CART_REMOVE_ITEM:
      return Object.keys(state)
        .map(u => parseInt(u, 10))
        .filter(k => k !== action.itemId)
        .reduce((s, k) => ({
          ...s,
          [k]: state[k],
        }), {})
    case ACTION_CART_SET_ITEM_COUNT:
      if (Number.isInteger(action.count) && action.count >= 0) {
        return {
          ...state,
          [action.itemId]: action.count,
        }
      }
      return state
    default:
      return state
  }
}

export default cartReducer
