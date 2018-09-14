import React from 'react'
import styled from 'react-emotion'
import { MdCopyright } from 'react-icons/md'
import theme from '../styles/constants'
import logogrey from '../assets/icons/logo/UlulGrey.png'

const WrapperLogo = styled('div')`
  margin-top: 50px;
  text-align: center;
  align-self: center;
  margin-bottom: 50px;
`
const LogoGrey = styled('img')``

const WrapperLink = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`

const LinkContent = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Subheading = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  text-align: center;
  color: ${theme.colors.medgray};
  margin-left: 50px;
  margin-right: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`
const Body2 = styled('div')`
  font-family: SF Pro Med;
  font-size: 14px;
  text-align: center;
  color: ${theme.colors.lightgray};
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

const Footer = () => {
  return (
    <div>
      <WrapperLogo>
        <LogoGrey src={logogrey} width="5%" />
      </WrapperLogo>
      <WrapperLink>
        <LinkContent>
          <Subheading>About Us</Subheading>
          <Subheading>Be a Trip Host</Subheading>
          <Subheading>How We Works</Subheading>
          <Subheading>Contact</Subheading>
          <Subheading>F.A.Q</Subheading>
          <Subheading>Trips</Subheading>
        </LinkContent>
        <LinkContent>
          <Body2>Terms & Conditions</Body2>
          <Body2>Sitemap</Body2>
          <Body2>
            <MdCopyright /> Ululatrip
          </Body2>
        </LinkContent>
      </WrapperLink>
    </div>
  )
}

export default Footer
