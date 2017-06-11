import React from 'react'
import PropTypes from 'prop-types'
import './item.scss'

const ItemFigure = props => (
  <div className="image-container">
    <img className="img" src={props.url} alt={props.name} />
  </div>
  )
ItemFigure.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const ItemDiscount = (props) => {
  if (props.discount > 0) {
    return (<span className="discount">{props.discount}% off</span>)
  }
  return <span />
}
ItemDiscount.propTypes = {
  discount: PropTypes.number.isRequired,
}

const ItemPrice = (props) => {
  if (props.discount > 0) {
    const finalPrice = Math.round((props.price * 100) - (props.discount * props.price)) / 100
    return (
      <div>
        <span className="actual-price">
          <span className="price">${props.price.toFixed(2)}</span>
        </span> &nbsp;
        <span className="final-price">${finalPrice.toFixed(2)}</span>
      </div>
    )
  }
  return (
    <div>
      <span className="final-price">${props.price.toFixed(2)}</span>
    </div>
  )
}
ItemPrice.propTypes = {
  discount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

const ItemComponent = props => (
  <section className="item-card">
    <ItemFigure url={props.item.img_url} name={props.item.name} />
    <ItemDiscount discount={props.item.discount} />
    <div className="info">
      <div className="item-name">{props.item.name}</div>
      <ItemPrice discount={props.item.discount} price={props.item.price} />
      <button
        onClick={() => { props.addToCart(props.item.id, `${props.item.name} : added to cart`) }}
        className="add-to-cart"
      > Add to Cart </button>
    </div>
  </section>
)

ItemComponent.propTypes = {
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    img_url: PropTypes.string.isRequired,
  }).isRequired,
}

export default ItemComponent
