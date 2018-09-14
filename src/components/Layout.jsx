import React from 'react'
import PropTypes from 'prop-types'
import '../styles/global'
import '../styles/font.css'
import HeaderHome from './HeaderHome'
import DescBefore from './DescBefLog'
import Popular from './Populartrip'
import HostRank from './TripHostRank'
import AboutUs from './AboutUs'
import BottomContent from './BottomContent'
import Footer from './Footer'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div>
        <HeaderHome />
        <DescBefore />
        <Popular />
        <HostRank />
        <AboutUs />
        <BottomContent />
        <Footer />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
