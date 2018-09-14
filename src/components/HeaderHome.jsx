import React from 'react'
import styled from 'react-emotion'
import { FaPlayCircle } from 'react-icons/fa'
import bgheader from '../assets/images/bgheader.png'
import theme from '../styles/constants'
import PrimaryButton from './Button'
import NavigationAfter from './NavigationAfter'

const HeaderContainer = styled('div')`
  flex-direction: column;
  display: flex;
`

const Display3 = styled('div')`
  font-family: Eina03;
  position: absolute;
  color: white;
  font-size: 56px;
  text-align: center;
  align-self: center;
  top: 25%;
`

const Display1 = styled('div')`
  font-family: Eina03;
  position: absolute;
  color: white;
  font-size: 34px;
  text-align: center;
  align-self: center;
  top: 35%;
  max-width: 72%;
  line-height: 50px;
`

const ImageHeader = styled('img')`
position: absolute;
`

const PlayIcon = styled('div')`
  position: absolute;
  color: white;
  text-align: center;
  align-self: center;
  top: 50%;
  cursor: pointer;
  font-size: 70px;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const ButtonContainer = styled('div')`
  position: absolute;
  color: white;
  text-align: center;
  align-self: center;
  top: 65%;
`

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <NavigationAfter />
      <ImageHeader src={bgheader} alt="bgheader" className="w-full h-auto" />
      <Display3>Experience The New Within Indonesia</Display3>
      <Display1>
        Ululatrip is an experience-based travel marketplace that connects Tripper and Trip Host to explore Indonesia
        through an unique, different trips
      </Display1>
      <PlayIcon>
        <FaPlayCircle />
      </PlayIcon>
      <ButtonContainer>
        <PrimaryButton text="BE A TRIP HOST" />
      </ButtonContainer>
    </HeaderContainer>
  )
}

export default HeaderHome
