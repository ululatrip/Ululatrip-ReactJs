import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'

const SecondaryStyle = styled('button')`
  height: 44px;
  width: 290px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.white};
  font-family: 'SF Pro Display';
  font-size: 14px;

  &:hover {
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    text-decoration: underline;
  }
`
const SecondaryButton = ({ text, onClick }) => <SecondaryStyle onClick={onClick}>{text}</SecondaryStyle>

export default SecondaryButton
