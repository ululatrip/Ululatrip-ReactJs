import React from 'react'
import PropTypes from 'prop-types'
import '../styles/global'
import '../styles/font.css'
import HeaderHome from './HeaderHome'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <HeaderHome />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
