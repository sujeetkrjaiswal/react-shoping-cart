import {
  ACTION_CART_ADD_ITEM,
  ACTION_CART_REMOVE_ITEM,
  ACTION_CART_SET_ITEM_COUNT,
  ACTION_CART_INCREMENT_ITEM_COUNT,
  ACTION_CART_DECREMENT_ITEM_COUNT,

  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,

  ACTION_TOAST_SHOW,
  ACTION_TOAST_HIDE,
} from './const'

import getItems from '../api/itemsApi'

// Cart Related Actions
export const addToCart = (itemId => ({
  type: ACTION_CART_ADD_ITEM,
  itemId,
}))

export const removeFromCart = (itemId => ({
  type: ACTION_CART_REMOVE_ITEM,
  itemId,
}))

export const cartSetItemCount = ((itemId, count) => ({
  type: ACTION_CART_SET_ITEM_COUNT,
  itemId,
  count,
}))
export const cartIncrementItemCount = (itemId => ({
  type: ACTION_CART_INCREMENT_ITEM_COUNT,
  itemId,
}))
export const cartDecrementItemCount = (itemId => ({
  type: ACTION_CART_DECREMENT_ITEM_COUNT,
  itemId,
}))
// Item Related Action
export const updateItemFetchStatus = (type = ACTION_FETCH_STATUS_NOSTART, items = []) => ({
  type,
  items,
})

export const addItemsFromAPI = () => (
  (dispatch) => {
    dispatch(updateItemFetchStatus(ACTION_FETCH_STATUS_PENDING))
    getItems().then(
      (items) => { dispatch(updateItemFetchStatus(ACTION_FETCH_STATUS_SUCCESS, items)) },
      () => { dispatch(updateItemFetchStatus(ACTION_FETCH_STATUS_FAILED)) },
    )
  }
)

// Toast Related Action
export const showToast = msg => ({
  type: ACTION_TOAST_SHOW,
  msg,
})
export const hideToast = () => ({
  type: ACTION_TOAST_HIDE,
})
