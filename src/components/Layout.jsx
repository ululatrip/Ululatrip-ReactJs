import React from 'react'
import PropTypes from 'prop-types'
import '../styles/global'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout
