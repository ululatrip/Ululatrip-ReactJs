import React from 'react'
import styled from 'react-emotion'
import { Slide } from 'react-slideshow-image'
import Camping from '../images/camping.png'
import Diving from '../images/diving.jpg'
import Tracking from '../images/trekking.png'
import SlideStyle from './slide.css'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

const Image = styled('img')`
  width: 100%;
`
const Slideshow = () => {
  return (
    <Slide {...properties} style={{ SlideStyle }}>
      <div className="each-slide">
        <Image src={Camping} />
      </div>
      <div className="each-slide">
        <Image src={Diving} />
      </div>
      <div className="each-slide">
        <Image src={Tracking} />
      </div>
    </Slide>
  )
}

export default Slideshow
