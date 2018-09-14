import React from 'react'
import styled from 'react-emotion'
import Slideshow from 'react-slidez'
import diving from '../assets/images/diving.jpg'
import walking from '../assets/images/walking.png'
import travel from '../assets/images/travel.png'
import slider from '../styles/slider.css'

const Container = styled('div')`
  margin-right: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-left: 25px;
  overflow-x: auto;
`

const Slideshows = () => {
  return (
    <Container>
      <Slideshow
        showArrows={true}
        autoplay
        useDotIndex
        slideInterval={2000}
        defaultIndex={1}
        effect="left"
        height="200px"
        width="300px"
        style={{ slider }}
      >
        <img src={travel} />
        <img src={diving} />
        <img src={walking} />
      </Slideshow>
    </Container>
  )
}
export default Slideshows
