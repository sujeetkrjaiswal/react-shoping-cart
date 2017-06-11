import React from 'react'
import PropTypes from 'prop-types'

const CartSummaryRow = props => (
  <div className="sum-row">
    <div className="sum-text">{props.text}</div>
    <div className="sum-delimiter">:</div>
    <div className="sum-price">${props.amount.toFixed(2)}</div>
  </div>
)
CartSummaryRow.propTypes = {
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}
const CartSummary = props => (
  <section className="cart-summary-container">
    <div className="cart-summary">
      <h1 className="heading">Total</h1>
      <CartSummaryRow text={`Items(${props.itemCount})`} amount={props.grossTotal} />
      <CartSummaryRow text="Discount" amount={props.discount} />
      <CartSummaryRow text="Type Discount" amount={props.typeDiscount} />
      <CartSummaryRow className="order-total" text="Order Total" amount={props.netTotal} />
    </div>
  </section>
)


CartSummary.propTypes = {
  itemCount: PropTypes.number.isRequired,
  grossTotal: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  typeDiscount: PropTypes.number.isRequired,
  netTotal: PropTypes.number.isRequired,
}

export default CartSummary
