import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'
import SecondaryButton from './ButtonWhite'

const Container = styled('div')`
  display: flex;
  flex: 1;
  width: 100%;
  height: 250px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Display2 = styled('div')`
  font-family: Eina03;
  font-size: 45px;
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: 30px;
`

const Shadow = styled('div')`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const BottomContent = () => {
  return (
    <Container>
      <Display2> Interested in Hosting Unique Trips?</Display2>
      <Shadow>
        <SecondaryButton text="BE A TRIP HOST" />
      </Shadow>
    </Container>
  )
}

export default BottomContent
