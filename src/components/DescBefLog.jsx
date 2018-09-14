import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'
import hostIcon from '../assets/icons/homebef/host.png'
import tripperIcon from '../assets/icons/homebef/tripper.png'
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
  justify-content: center;
  margin-left: 400px;
  margin-right: 400px;
`
const ColContainer = styled('div')`
  flex-direction: column;
`

const ImageIcon = styled('img')`
  width: 30%;
  margin-left: 155px;
`

const Headline = styled('div')`
  font-family: Eina03;
  font-size: 24px;
  color: ${theme.colors.gray};
  text-align: center;
  margin-top: 30px;
`
const Subheading = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.gray};
  text-align: center;
  line-height: 25px;
  margin-bottom: 50px;
`

const ButtonContainer = styled('div')`
  text-align: center;
  align-self: center;
  margin-bottom: 20px;
`

const Grid = styled('div')`
  width: 80%;
  height: 1px;
  background-color: ${theme.colors.gray};
  margin-top: 100px;
  margin-bottom: 80px;
  margin-left: 10%;
`

const DescBefore = () => {
  return (
    <Container>
      <Display2 className="mt-20 mb-10">
        Who Are <DiffColor>You</DiffColor> ?
      </Display2>
      <RowContainer>
        <ColContainer>
          <ImageIcon src={hostIcon} />
          <Headline>Trip Host</Headline>
          <Subheading>
            Trip Hosts are those who create the <br /> different kind of unique trips to offer
          </Subheading>
        </ColContainer>
        <ColContainer>
          <ImageIcon src={tripperIcon} />
          <Headline>Tripper</Headline>
          <Subheading>
            Trippers are those who seek for unique <br /> trips & different trips of a lifetime
          </Subheading>
        </ColContainer>
      </RowContainer>
      <ButtonContainer>
        <SecondaryButton text="Learn More" />
      </ButtonContainer>
      <Grid />
    </Container>
  )
}

export default DescBefore
