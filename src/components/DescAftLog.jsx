import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'
import fishingIcon from '../assets/icons/homeaft/fishing-man.png'
import dolphinIcon from '../assets/icons/homeaft/icons8-dolphin-100.png'
import trekkingIcon from '../assets/icons/homeaft/icons8-trekking-100.png'
import sailIcon from '../assets/icons/homeaft/Sailing-Yacht-icon.png'
import SecondaryButton from './ButtonWhite'

const Container = styled('div')`
  margin-top: 850px;
`

const Display2 = styled('div')`
  font-family: Eina03;
  font-size: 45px;
  color: ${theme.colors.gray};
  text-align: center;
`
const DiffColor = styled('span')`
  color: ${theme.colors.primary};
`

const RowContainer = styled('div')`
  flex-direction: row;
  display: flex;
  flex: 1;
  justify-content: center;
`
const ColContainer = styled('div')`
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;
  &:hover {
   opacity: 0.5;
  }
`

const ImageIcon = styled('img')`
`

const Headline = styled('div')`
  font-family: Eina03;
  font-size: 24px;
  color: ${theme.colors.gray};
  text-align: center;
  margin-top: 30px;
`

const ButtonContainer = styled('div')`
  text-align: center;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const Grid = styled('div')`
  width: 80%;
  height: 1px;
  background-color: ${theme.colors.gray};
  margin-top: 90px;
  margin-bottom: 80px;
  margin-left: 10%;
`

const Title = styled('div')`
  text-align: center;
  color: ${theme.colors.lightgray};
  font-family: Eina03;
  font-size: 20px;
`

const DescBefore = () => {
  return (
    <Container>
      <Display2 className="mt-20 mb-10">
        Have a specific <DiffColor>Trip</DiffColor> in mind?
      </Display2>
      <Title className="mb-10">Pick one of the Trip categories</Title>
      <RowContainer>
        <ColContainer>
          <ImageIcon src={fishingIcon} />
          <Headline>Relaxing</Headline>
        </ColContainer>
        <ColContainer>
          <ImageIcon src={dolphinIcon} />
          <Headline>Nature</Headline>
        </ColContainer>
        <ColContainer>
          <ImageIcon src={trekkingIcon} />
          <Headline>Trekking</Headline>
        </ColContainer>
        <ColContainer>
          <ImageIcon src={sailIcon} />
          <Headline>Sailing</Headline>
        </ColContainer>
      </RowContainer>
      <Title className="mt-10 mb-10">Or just type explore all trips</Title>
      <ButtonContainer>
        <SecondaryButton text="SEE ALL TRIPS" />
      </ButtonContainer>
      <Grid />
    </Container>
  )
}

export default DescBefore
