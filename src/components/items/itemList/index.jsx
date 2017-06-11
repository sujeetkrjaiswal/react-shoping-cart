import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  STORE_KEY_ITEMS,
} from '../../../actions/const'
import ItemListComponent from './itemList'

const mapStateToProps = state => ({
  items: state[STORE_KEY_ITEMS],
})

export default withRouter(connect(
  mapStateToProps,
)(ItemListComponent))
