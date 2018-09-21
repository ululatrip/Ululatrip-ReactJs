import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'
import logopink from '../assets/icons/logo/UluPink.png'
import ThirdButton from './ButtonTrans'

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
    text-decoration: underline;
  }
`

const Navigation = () => {
  return (
    <Wrapper>
      <ContainerLeft>
        <LogoPink src={logopink} width="12%" />
        <NavLink>Trips</NavLink>
        <NavLink>How We Works</NavLink>
        <NavLink>About Us</NavLink>
      </ContainerLeft>
      <ContainerRight>
        <NavLink>Sign In</NavLink>
        <ThirdButton text="SIGN UP" />
      </ContainerRight>
    </Wrapper>
  )
}

export default Navigation
