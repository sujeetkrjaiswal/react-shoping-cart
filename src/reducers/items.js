import {
  ACTION_FETCH_STATUS_SUCCESS,
} from '../actions/const'

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_FETCH_STATUS_SUCCESS:
      return [
        ...state,
        ...action.items,
      ]
    default:
      return state
  }
}

export default itemsReducer
