import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addItemsFromAPI } from '../../actions'
import {
  STORE_KEY_CART,
  STORE_KEY_FETCH_STATUS,
} from '../../actions/const'

import itemsFetchComponent from './items.fetch'
import './items.scss'

const getIemsInCart = cart => Object.keys(cart).reduce((sum, key) => (sum + cart[key]), 0)

const mapStateToProps = state => ({
  status: state[STORE_KEY_FETCH_STATUS],
  itemsInCart: getIemsInCart(state[STORE_KEY_CART]),
})
const mapDispatchToProps = dispatch => ({
  fetchList: () => (dispatch(addItemsFromAPI())),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(itemsFetchComponent))
