import {
  ACTION_TOAST_SHOW,
  ACTION_TOAST_HIDE,
  // ACTION_CART_ADD_ITEM,
} from '../actions/const'

const toastReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TOAST_SHOW:
      return {
        visible: true,
        msg: action.msg,
      }
    case ACTION_TOAST_HIDE:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

export default toastReducer
