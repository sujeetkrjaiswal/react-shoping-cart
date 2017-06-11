import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  addToCart,
  showToast,
} from '../../../actions'
import ItemComponent from './item.compnent'

const mapDispatchToProps = dispatch => ({
  addToCart: (itemId, msg) => {
    dispatch(addToCart(itemId))
    dispatch(showToast(msg))
  },
})

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(ItemComponent))
