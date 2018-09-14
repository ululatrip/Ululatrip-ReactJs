import React from 'react'
import styled from 'react-emotion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Slideshows from './Sliders'
import theme from '../styles/constants'

const Display2 = styled('div')`
  font-family: Eina03;
  font-size: 45px;
  color: ${theme.colors.gray};
  text-align: center;
`

const RowContainer = styled('div')`
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const ColContainer = styled('div')`
  flex-direction: column;
`

const SubheadingWrapper = styled('div')`
  margin-top: 280px;
  margin-left: 20px;
`
const TitleWrapper = styled('div')`
  margin-top: 10px;
  margin-left: 20px;
`

const PinWrapper = styled('div')`
  margin-top: 20px;
  margin-left: 20px;
  color: ${theme.colors.gray};
`

const PinWrapper2 = styled('div')`
  margin-top: 10px;
  margin-left: 20px;
  color: ${theme.colors.gray};
`

const Location = styled('span')`
  font-family: SF Pro Txt;
  font-size: 16px;
  margin-left: 10px;
`
const Subheading = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.lightgray};
`
const Title = styled('div')`
  font-family: SF Pro Display;
  font-size: 20px;
`

const SubheadingPink = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.primary};
`

const LinkAll = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.primary};
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const Popular = () => {
  return (
    <div>
      <Display2>Popular Trips</Display2>
      <RowContainer>
        <ColContainer>
          <Slideshows />
          <SubheadingWrapper>
            <Subheading>Fish Watching</Subheading>
          </SubheadingWrapper>
          <TitleWrapper>
            <Title>Walk On The Water</Title>
          </TitleWrapper>
          <TitleWrapper>
            <SubheadingPink>Sea World | Ancol </SubheadingPink>
          </TitleWrapper>
          <PinWrapper>
            <FaMapMarkerAlt />
            <Location>Jakarta</Location>
          </PinWrapper>
          <PinWrapper2>
            <FaMapMarkerAlt />
            <Location>1 Day</Location>
          </PinWrapper2>
          <PinWrapper>Rp200.0000 per orang</PinWrapper>
        </ColContainer>
        <ColContainer>
          <Slideshows />
          <SubheadingWrapper>
            <Subheading>Campingg</Subheading>
          </SubheadingWrapper>
          <TitleWrapper>
            <Title>Swing Swing Swing</Title>
          </TitleWrapper>
          <TitleWrapper>
            <SubheadingPink>Pancar | Curug Cermin </SubheadingPink>
          </TitleWrapper>
          <PinWrapper>
            <FaMapMarkerAlt />
            <Location>Sentul</Location>
          </PinWrapper>
          <PinWrapper2>
            <FaMapMarkerAlt />
            <Location>2 Day 1 Night</Location>
          </PinWrapper2>
          <PinWrapper>Rp600.0000 per orang</PinWrapper>
        </ColContainer>
        <ColContainer>
          <Slideshows />
          <SubheadingWrapper>
            <Subheading>Trekking</Subheading>
          </SubheadingWrapper>
          <TitleWrapper>
            <Title>Off The Beaten Path</Title>
          </TitleWrapper>
          <TitleWrapper>
            <SubheadingPink>Jalur Kuda | Burangrang </SubheadingPink>
          </TitleWrapper>
          <PinWrapper>
            <FaMapMarkerAlt />
            <Location>Jawa Barat</Location>
          </PinWrapper>
          <PinWrapper2>
            <FaMapMarkerAlt />
            <Location>4 Day 3 Night</Location>
          </PinWrapper2>
          <PinWrapper>Rp2000.0000 per orang</PinWrapper>
        </ColContainer>
        <ColContainer>
          <Slideshows />
          <SubheadingWrapper>
            <Subheading>Free Diving</Subheading>
          </SubheadingWrapper>
          <TitleWrapper>
            <Title>Water Master Gili</Title>
          </TitleWrapper>
          <TitleWrapper>
            <SubheadingPink>Gili Lawa </SubheadingPink>
          </TitleWrapper>
          <PinWrapper>
            <FaMapMarkerAlt />
            <Location>Lombok</Location>
          </PinWrapper>
          <PinWrapper2>
            <FaMapMarkerAlt />
            <Location>4 Day 3 Night</Location>
          </PinWrapper2>
          <PinWrapper>Rp3000.0000 per orang</PinWrapper>
        </ColContainer>
      </RowContainer>
      <LinkAll>See All Trips ></LinkAll>
    </div>
  )
}

export default Popular
