import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import '../styles/global'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
