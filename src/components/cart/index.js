import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { STORE_KEY_CART, STORE_KEY_ITEMS } from '../../actions/const'
import CartComponent from './cart.view'

const getCartAsList = (cart, items) => items.filter(item => item.id in cart)
    .map(item => ({
      ...item,
      count: cart[item.id],
    }))


const mapStateToProps = state => ({
  cartItems: getCartAsList(state[STORE_KEY_CART], state[STORE_KEY_ITEMS]),
})


export default withRouter(connect(
  mapStateToProps,
)(CartComponent))
