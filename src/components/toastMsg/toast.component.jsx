import React from 'react'
import PropTypes from 'prop-types'
import './toast.scss'

class ToastComponent extends React.Component {
  componentDidMount() {
    this.schedule()
  }
  componentDidUpdate() {
    this.schedule()
  }
  componentWillUnmount() {
    this.clear()
  }
  schedule() {
    this.clear()
    this.timer = setTimeout(() => {
      this.props.hideMe()
    }, this.props.timer)
  }
  clear() {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <section className={this.props.visible ? 'toast active' : 'toast'}>
        <h1>{this.props.msg}</h1>
      </section>
    )
  }
}
ToastComponent.propTypes = {
  visible: PropTypes.bool.isRequired,
  msg: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  hideMe: PropTypes.func.isRequired,
}
export default ToastComponent
