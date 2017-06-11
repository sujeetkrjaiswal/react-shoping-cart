import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
} from '../actions/const'

const fetchStatusReducer = (state = ACTION_FETCH_STATUS_NOSTART, action) => {
  switch (action.type) {
    case ACTION_FETCH_STATUS_NOSTART:
    case ACTION_FETCH_STATUS_PENDING:
    case ACTION_FETCH_STATUS_FAILED:
    case ACTION_FETCH_STATUS_SUCCESS:
      return action.type
    default:
      return state
  }
}

export default fetchStatusReducer
