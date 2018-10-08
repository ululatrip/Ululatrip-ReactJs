import React from 'react'
import styled from 'react-emotion'
import theme from '../../styles/constants'
import logopink from '../../assets/icons/logo/UluPink.png'
import Button from '../button/ButtonTransparent'
import Signup from '../signup/signup'

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 20;
  position: absolute;
  top: 0;
`
const ContainerLeft = styled('div')`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: relative;
  padding-left: 32px;
`

const ContainerRight = styled('div')`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  position: relative;
  padding-right: 32px;
`
const LogoPink = styled('img')`
  cursor: pointer;
  margin-right: 40px;
`

const NavLink = styled('div')`
  cursor: pointer;
  margin-right: 50px;

  &:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
  }
`

class Navigation extends React.Component {
  onClick = () => {
    this.popup.show()
  }

  render() {
    return (
      <Container>
        <ContainerLeft className="navWhite">
          <LogoPink src={logopink} width="12%" />
          <NavLink>Trips</NavLink>
          <NavLink>How We Works</NavLink>
          <NavLink>About Us</NavLink>
        </ContainerLeft>
        <ContainerRight>
          <NavLink className="navWhite">Sign In</NavLink>
          <Signup onRef={ref => (this.popup = ref)} />
          <Button text="SIGN UP" onClick={this.onClick} />
        </ContainerRight>
      </Container>
    )
  }
}

export default Navigation
