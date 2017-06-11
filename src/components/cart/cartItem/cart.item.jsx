import React from 'react'
import PropTypes from 'prop-types'
import './cart-item.scss'

const CartItemDetails = props => (
  <div className="ci-detail">
    <img className="ci-img" src={props.url} alt={props.name} />
    <span className="ci-text">{props.name}</span>
    <button className="ci-remove" onClick={props.remove}> X </button>
  </div>
)
CartItemDetails.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
}

const CartItemComponent = (props) => {
  let input
  const itemId = props.cartItem.id
  const onChange = (e) => {
    const newValue = input.value
    if (Number.isInteger(parseInt(newValue, 10))) {
      props.cartSetItemCount(itemId, parseInt(newValue, 10))
    } else {
      e.preventDefault()
    }
  }
  return (
    <div className="cl-row ">
      <div className="cl-item">
        <CartItemDetails
          name={props.cartItem.name}
          url={props.cartItem.img_url}
          remove={() => { props.removeFromCart(props.cartItem.id) }}
        />
      </div>
      <div className="cl-action">
        <button className="ci-btn" onClick={() => { props.cartDecrementItemCount(itemId) }}> - 1</button>
        <input
          className="ci-input"
          ref={(node) => { input = node }}
          value={props.cartItem.count}
          onChange={onChange}
        />
        <button className="ci-btn" onClick={() => { props.cartIncrementItemCount(itemId) }}> + 1</button>
      </div>
      <div className="cl-price">
        <span className="ci-price">${props.cartItem.price}</span>
      </div>
    </div>
  )
}

CartItemComponent.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  cartSetItemCount: PropTypes.func.isRequired,
  cartIncrementItemCount: PropTypes.func.isRequired,
  cartDecrementItemCount: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
}

export default CartItemComponent
