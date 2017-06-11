import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  cartSetItemCount,
  cartIncrementItemCount,
  cartDecrementItemCount,
  removeFromCart,
} from '../../../actions'
import CartItemComponent from './cart.item'

const mapDispatchToProps = dispatch => ({
  removeFromCart: (itemId) => { dispatch(removeFromCart(itemId)) },
  cartSetItemCount: (itemId, count) => { dispatch(cartSetItemCount(itemId, count)) },
  cartIncrementItemCount: (itemId) => { dispatch(cartIncrementItemCount(itemId)) },
  cartDecrementItemCount: (itemId) => { dispatch(cartDecrementItemCount(itemId)) },
})

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(CartItemComponent))
