import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ItemList from '../itemList'

const CartButton = props => (
  <Link className="cart-link" to="/cart">
    Go To Carts &nbsp;
    <i className="cartIcon" />
    <span className="items-cart">{props.itemsInCart}</span>
  </Link>
)
CartButton.propTypes = {
  itemsInCart: PropTypes.number.isRequired,
}

const FetchSuccess = props => (
  <section className="itemListContainer">
    <header className="header">
      <h1 className="header-title">All Items</h1>
      {props.itemsInCart === 0 ? null : <CartButton itemsInCart={props.itemsInCart} />}
    </header>
    <ItemList />
  </section>
)
FetchSuccess.propTypes = {
  itemsInCart: PropTypes.number.isRequired,
}
export default FetchSuccess
