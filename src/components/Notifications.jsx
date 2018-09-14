import React, { Component } from 'react'
import styled from 'react-emotion'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import theme from '../styles/constants'
import tripper from '../assets/icons/homebef/tripper.png'

const Box = styled('div')`
  margin-top: 115px;
  position: absolute;
  right: 155px;
  border-radius: 5px;
  width: 300px;
  height: 180px;
  background-color: ${theme.colors.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 80;
`

const Body2 = styled('div')`
  font-family: Eina03-SemiBold;
  font-size: 14px;
  color: ${theme.colors.gray};
`
const View = styled('div')`
  font-family: SF Pro Txt;
  font-size: 14px;
  color: ${theme.colors.lightgray};

  &:hover {
    text-decoration: underline;
  }
`
const RowContainer = styled('div')`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`
const RowContainer2 = styled('div')`
  margin-top: -70px;
  flex: 1;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  cursor: pointer;
`
const Grid = styled('div')`
  width: 90%;
  height: 1px;
  position: absolute;
  margin-left: 15px;
  top: 50px;
  background-color: ${theme.colors.gray};
`
const NotifArrow = styled('div')`
  color: ${theme.colors.primary};
`
const IconUser = styled('img')`
  width: 40px;
  margin-top: 6px;
`
const CircleUser = styled('div')`
  background-color: ${theme.colors.red};
  border-radius: 100%;
  width: 60px;
  height: 60px;
  text-align: center;
`
const CircleWrap = styled('div')`
  position: absolute;
  bottom: 25px;
  left: 20px;
`
const Wrap = styled('div')`
  display: flex;
  flex-direction: row;
`
const Description = styled('div')`
  position: absolute;
  bottom: 40px;
  left: 90px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`

const DummyNotif = () => {
  return (
    <Wrap>
      <CircleWrap>
        <CircleUser>
          <IconUser src={tripper} />
        </CircleUser>
      </CircleWrap>
      <Description>
        <Body2>Notification 1</Body2>
        <View>Notification Detail 1</View>
      </Description>
    </Wrap>
  )
}

class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isView: false,
    }
  }

  onClickHandler = () => {
    this.setState(prev => ({ isView: !prev.isView }))
  }

  render() {
    return (
      <Box>
        <RowContainer>
          <Body2>Messages (0)</Body2>
          <View>View</View>
        </RowContainer>
        <Grid />
        <RowContainer2>
          <Body2>Notification (1)</Body2>
          <NotifArrow onClick={this.onClickHandler}>{this.state.isView ? <FaCaretUp /> : <FaCaretDown />}</NotifArrow>
        </RowContainer2>
        {this.state.isView ? <DummyNotif /> : null}
      </Box>
    )
  }
}

export default Notification
