import React from 'react'
import Header from './Header'
import FirstContent from './How'
import SecondContent from './Popular'
import ThirdContent from './Rank'
import FourthComponent from './About'
import FifthComponent from './Interest'
import Footer from './Footer'

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthComponent />
      <FifthComponent />
      <Footer />
    </div>
  )
}

export default HomeLayout
