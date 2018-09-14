import React, { Component } from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'
import logopink from '../assets/icons/logo/UluPink.png'
import tripper from '../assets/icons/homebef/tripper.png'
import Notifications from './Notifications'
import BoxProfile from './BoxProfile'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 50;
`
const ContainerLeft = styled('div')`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  padding-left: 50px;
`

const ContainerRight = styled('div')`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  position: relative;
  padding-right: 50px;
`
const LogoPink = styled('img')`
  cursor: pointer;
`

const NavLink = styled('div')`
  font-family: Eina03;
  font-size: 24px;
  color: ${theme.colors.white};
  cursor: pointer;
  margin-right: 50px;

  &:hover {
    color: ${theme.colors.primary};
  }
`

const IconUser = styled('img')`
  width: 40px;
  margin-top: 6px;
`
const CircleUser = styled('div')`
  background-color: ${theme.colors.white};
  border-radius: 100%;
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.primary};
  }
`

class NavigationAfter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpened: false,
      isViewed: false,
    }
  }

  onClickHandler = () => {
    this.setState(prev => ({ isOpened: !prev.isOpened }))
  }

  onClick = () => {
    this.setState(next => ({ isViewed: !next.isViewed }))
  }

  render() {
    return (
      <Wrapper>
        <ContainerLeft>
          <LogoPink src={logopink} width="12%" />
          <NavLink>Trips</NavLink>
          <NavLink>How We Works</NavLink>
          <NavLink>About Us</NavLink>
        </ContainerLeft>
        <ContainerRight>
          <NavLink>Be a Trip Creator</NavLink>
          <NavLink onClick={this.onClickHandler}>Notification</NavLink>
          {this.state.isOpened ? <Notifications /> : null}
          <CircleUser onClick={this.onClick}>
            <IconUser src={tripper} />
            {this.state.isViewed ? <BoxProfile /> : null}
          </CircleUser>
        </ContainerRight>
      </Wrapper>
    )
  }
}

export default NavigationAfter
