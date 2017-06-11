import React from 'react'
import PropTypes from 'prop-types'

import CartItem from './cartItem'

const CartListComponent = props => (
  <div className="cart-list">
    <div className="cl-row heading">
      <div className="cl-item">Items ({props.total})</div>
      <div className="cl-action">Qty</div>
      <div className="cl-price">Price</div>
    </div>
    {props.cartItems.map(cartItem => (
      <CartItem key={cartItem.id} cartItem={cartItem} />
    ))}
  </div>
)

CartListComponent.propTypes = {
  total: PropTypes.number.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      img_url: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
}

export default CartListComponent
