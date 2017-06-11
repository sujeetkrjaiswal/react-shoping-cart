import React from 'react'
import PropTypes from 'prop-types'
import Item from '../item'

const ItemListComponent = props => (
  <section>
    {props.items.map(item => (
      <Item key={item.id} item={item} />
    ))}
  </section>
)
ItemListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      img_url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}
export default ItemListComponent
