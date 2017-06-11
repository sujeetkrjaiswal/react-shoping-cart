import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  hideToast,
} from '../../actions'
import { STORE_KEY_TOAST } from '../../actions/const'
import ToastComponent from './toast.component'

const mapStateToProps = state => ({
  ...state[STORE_KEY_TOAST],
})

const mapDispatchToProps = dispatch => ({
  hideMe: () => { dispatch(hideToast()) },
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToastComponent))
