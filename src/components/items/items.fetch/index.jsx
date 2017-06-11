import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ACTION_FETCH_STATUS_NOSTART,
  ACTION_FETCH_STATUS_PENDING,
  ACTION_FETCH_STATUS_SUCCESS,
  ACTION_FETCH_STATUS_FAILED,
} from '../../../actions/const'
import FetchNotStarted from './nostart'
import FetchPending from './pending'
import FetchSuccess from './success'
import FetchError from './error'

class itemsComponent extends Component {
  componentDidMount() {
    if (this.props.status === ACTION_FETCH_STATUS_NOSTART) {
      this.fetchData()
    }
  }
  fetchData() {
    this.props.fetchList()
  }
  render() {
    switch (this.props.status) {
      case ACTION_FETCH_STATUS_NOSTART:
        return <FetchNotStarted />
      case ACTION_FETCH_STATUS_PENDING:
        return <FetchPending />
      case ACTION_FETCH_STATUS_FAILED:
        return <FetchError />
      case ACTION_FETCH_STATUS_SUCCESS:
        return <FetchSuccess itemsInCart={this.props.itemsInCart} />
      default:
        return <FetchError />
    }
  }
}
itemsComponent.propTypes = {
  fetchList: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  itemsInCart: PropTypes.number.isRequired,
}

export default itemsComponent
