import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'

const TransButton = styled('button')`
  height: 44px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-family: 'SF Pro Display';
  font-size: 14px;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
  }
`
const ThirdButton = ({ text, onClick }) => <TransButton onClick={onClick}>{text}</TransButton>

export default ThirdButton
