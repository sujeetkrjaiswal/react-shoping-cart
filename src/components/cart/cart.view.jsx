import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import CartList from './cart.list'
import CartSummary from './cart.summary'
import './cart.scss'

class CartViewComponent extends Component {
  componentWillMount() {
    this.redirectIfRequired()
  }
  componentDidUpdate() {
    this.redirectIfRequired()
  }
  getSummary() {
    const summary = {
      itemCount: 0,
      grossTotal: 0,
      discount: 0,
      typeDiscount: 0,
      netTotal: 0,
    }
    this.props.cartItems.forEach((item) => {
      summary.itemCount += item.count
      summary.grossTotal += (item.price * item.count)
      summary.discount += (Math.round(item.price * item.count * item.discount) / 100)
      if (item.type === 'fiction') {
        summary.typeDiscount += (Math.round(item.price * item.count * 15) / 100)
      }
    })
    summary.netTotal = summary.grossTotal - summary.discount - summary.typeDiscount
    return summary
  }
  redirectIfRequired() {
    if (this.props.cartItems.length === 0) {
      this.props.history.push('/')
    }
  }
  render() {
    const summary = this.getSummary()
    return (
      <section className="cart-container">
        <header className="cart-header">
          <Link className="go-back" to="/"> &lsaquo; </Link>
          Order Summary
        </header>
        <CartSummary {...summary} />
        <CartList cartItems={this.props.cartItems} total={summary.itemCount} />
      </section>
    )
  }
}
CartViewComponent.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
export default CartViewComponent
