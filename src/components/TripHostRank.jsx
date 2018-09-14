import React from 'react'
import styled from 'react-emotion'
import cliff from '../assets/images/cliff.png'
import theme from '../styles/constants'
import tripper from '../assets/icons/homebef/tripper.png'

const HeaderContainer = styled('div')`
  flex-direction: column;
  display: flex;
`
const Display2 = styled('div')`
  font-family: Eina03;
  position: absolute;
  color: white;
  font-size: 45px;
  text-align: center;
  align-self: center;
  margin-top: 50px;
`

const ImageBg = styled('img')``
const Circle = styled('div')`
  background-color: ${theme.colors.white};
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-top: -430px;
  margin-left: 50px;
`
const ImageIcon = styled('img')`
  width: 70px;
  margin-left: 16px;
  margin-top: 10px;
`

const Grid = styled('div')`
  width: 30%;
  height: 1px;
  background-color: ${theme.colors.white};
  position: absolute;
  margin-top: 115px;
  text-align: center;
  align-self: center;
`
const Number = styled('div')`
  font-family: SF Pro Display;
  position: absolute;
  color: ${theme.colors.white};
  font-size: 20px;
  margin-top: -400px;
`

const RowContainer = styled('div')`
  flex-direction: row;
  display: flex;
  margin-left: 590px;
`
const RowContainer2 = styled('div')`
  flex-direction: row;
  display: flex;
  margin-left: 590px;
  margin-top: 125px;
`
const RowContainer3 = styled('div')`
  flex-direction: row;
  display: flex;
  margin-left: 590px;
  margin-top: 125px;
`

const Name = styled('div')`
  font-family: SF Pro Display;
  color: ${theme.colors.white};
  font-size: 20px;
  margin-top: -420px;
  margin-left: 30px;
`
const Role = styled('div')`
  font-family: SF Pro Txt;
  font-size: 14px;
  color: ${theme.colors.white};
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
`
const Motto = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.white};
  margin-left: 30px;
`
const ColContainer = styled('div')`
  display: flex;
  flex-direction: column;
`
const LinkAll = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.white};
  align-self: center;
  position: absolute;
  margin-top: 540px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const HostRank = () => {
  return (
    <HeaderContainer>
      <ImageBg src={cliff} />
      <Display2>Trip Host Rank</Display2>
      <Grid />
      <RowContainer>
        <Number>1.</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <ColContainer>
          <Name>Deandra Fihanna Marissi</Name>
          <Role>Founder of Ululatrip</Role>
          <Motto>Increasing Prosperity With Positive Thinking</Motto>
        </ColContainer>
      </RowContainer>
      <RowContainer2>
        <Number>2.</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <ColContainer>
          <Name>Marc Huff</Name>
          <Role>Volcano Master</Role>
          <Motto>Fear of Driving and Automatic Negative Thoughts</Motto>
        </ColContainer>
      </RowContainer2>
      <RowContainer3>
        <Number>3.</Number>
        <Circle>
          <ImageIcon src={tripper} />
        </Circle>
        <ColContainer>
          <Name>Phillip Watts</Name>
          <Role>Teacher</Role>
          <Motto>Peace on Earth A Wonderful Wish But No Way</Motto>
        </ColContainer>
      </RowContainer3>
      <LinkAll>Show All ></LinkAll>
    </HeaderContainer>
  )
}

export default HostRank
