import React from 'react'
import styled from 'react-emotion'
import { FaInstagram, FaFacebookSquare, FaLine, FaWhatsapp } from 'react-icons/fa'
import theme from '../styles/constants'
import logopink from '../assets/icons/logo/UluPink.png'

const Display1 = styled('div')`
  font-family: Eina03;
  font-size: 34px;
  text-align: center;
  color: ${theme.colors.gray};
  position: relative;
  margin-top: -200px;
`

const LogoPink = styled('img')``

const WrapperLogo = styled('div')`
  margin-top: 30px;
  text-align: center;
  align-self: center;
`

const Description = styled('div')`
  font-family: Eina03;
  font-size: 16px;
  text-align: center;
  color: ${theme.colors.medgray};
  margin-top: 30px;
  line-height: 20px;
`

const IconContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Icons = styled('div')`
  margin-top: 50px;
  color: ${theme.colors.medgray};
  cursor: pointer;
  font-size: 50px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 70px;
  &:hover {
    opacity: 0.5;
  }
`

const SocialIcons = () => {
  return (
    <IconContainer>
      <Icons>
        <FaInstagram />
      </Icons>
      <Icons>
        <FaFacebookSquare />
      </Icons>
      <Icons>
        <FaLine />
      </Icons>
      <Icons>
        <FaWhatsapp />
      </Icons>
    </IconContainer>
  )
}

const AboutUs = () => {
  return (
    <div>
      <Display1>About Us</Display1>
      <WrapperLogo>
        <LogoPink src={logopink} width="5%" />
      </WrapperLogo>
      <Description>
        Ululatrip is an experience-based travel marketplace thst connects Tripper and Trip Host to explore <br />
        Indonesia through an unique, different trips. You'll find a wide selection of unique trips,
        <br /> crafted by Trip Hosts
      </Description>
      <SocialIcons />
    </div>
  )
}

export default AboutUs
