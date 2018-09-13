import React from 'react'
import styled from 'react-emotion'
import theme from '../styles/constants'

const PrimaryStyle = styled('button')`
  height: 44px;
  width: 290px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f36d7c 0%, #fe7676 100%);
  color: ${theme.colors.white};
  font-family: 'SF Pro Display';
  font-size: 14px;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    text-decoration: underline;
  }
`
const PrimaryButton = ({ text, onClick }) => <PrimaryStyle onClick={onClick}>{text}</PrimaryStyle>

export default PrimaryButton
