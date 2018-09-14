import React, { Component } from 'react'
import styled from 'react-emotion'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import theme from '../styles/constants'
import tripper from '../assets/icons/homebef/tripper.png'

const Box = styled('div')`
  margin-top: 25px;
  position: absolute;
  right: 50px;
  border-radius: 5px;
  width: 300px;
  height: 160px;
  background-color: ${theme.colors.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 80;
`

const Body2 = styled('div')`
  font-family: Eina03-SemiBold;
  font-size: 14px;
  color: ${theme.colors.primary};
`
const View = styled('div')`
  font-family: SF Pro Txt;
  font-size: 14px;
  color: ${theme.colors.lightgray};
  margin-top: 5px;

  &:hover {
    text-decoration: underline;
  }
`
const ColsContainer = styled('div')`
  margin-top: 20px;
  cursor: pointer;
  text-align: left;
  margin-left: 20px;
`

const Grid = styled('div')`
  width: 90%;
  height: 1px;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: -5px;
  background-color: ${theme.colors.lightgray};
`
const Grid2 = styled('div')`
  margin-top: 10px;
  width: 90%;
  height: 1px;
  margin-left: 15px;
  background-color: ${theme.colors.lightgray};
`
const Body = styled('div')`
  font-family: Eina03-SemiBold;
  font-size: 14px;
  color: ${theme.colors.grey};
  &:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
`
class BoxProfile extends Component {
  render() {
    return (
      <Box>
        <ColsContainer>
          <Body2>Muhammad Regi Arfiandi</Body2>
          <View>Tripper</View>
        </ColsContainer>
        <Grid />
        <ColsContainer>
          <Body>Edit Profile</Body>
        </ColsContainer>
        <Grid2 />
        <ColsContainer>
          <Body>Log Out</Body>
        </ColsContainer>
      </Box>
    )
  }
}

export default BoxProfile
