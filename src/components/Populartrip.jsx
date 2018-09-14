import React, { Component } from 'react'
import styled from 'react-emotion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Slideshows from './Sliders'
import theme from '../styles/constants'
import cirmage from '../assets/images/paus.jpg'
import FourthButton from './ButtonHover'

const Display2 = styled('div')`
  font-family: Eina03;
  font-size: 45px;
  color: ${theme.colors.gray};
  text-align: center;
  margin-bottom: 20px;
`

const RowContainer = styled('div')`
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const ColContainer = styled('div')`
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
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
  margin-bottom: 30px;
`
const PinLocation = styled('div')`
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

const HoverContainer = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`
const Grid = styled('div')`
  width: 90%;
  height: 1px;
  background-color: ${theme.colors.medgray};
  margin-bottom: 10px;
`
const ContentHover = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: row;
`
const CircleImage = styled('img')`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 10px;
`

const Name = styled('div')`
  font-family: SF Pro Txt;
  font-size: 16px;
  color: ${theme.colors.gray};
  margin-top: 8px;
`
const Subheading2 = styled('div')`
  font-family: SF Pro Txt;
  font-size: 14px;
  color: ${theme.colors.lightgray};
`
const ColHover = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const WrapperButton = styled('div')`
  margin-bottom: 20px;
`

const AllHover = () => {
  return (
    <HoverContainer>
      <Grid />
      <ContentHover>
        <CircleImage src={cirmage} />
        <ColHover>
          <Name>Deandra Fihanna Marissi</Name>
          <Subheading2>Ululatrip Founder</Subheading2>
        </ColHover>
      </ContentHover>
      <WrapperButton>
        <FourthButton text="SEE THIS TRIP" />
      </WrapperButton>
    </HoverContainer>
  )
}
class PopularTrips extends Component {
  constructor(props) {
    super(props)
    this.handleMouseHover = this.handleMouseHover.bind(this)
    this.handleMouseHover2 = this.handleMouseHover2.bind(this)
    this.handleMouseHover3 = this.handleMouseHover3.bind(this)
    this.handleMouseHover4 = this.handleMouseHover4.bind(this)

    this.state = {
      isHovering: false,
      isHovering2: false,
      isHovering3: false,
      isHovering4: false,
    }
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  handleMouseHover2() {
    this.setState(this.toggleHoverState2)
  }

  handleMouseHover3() {
    this.setState(this.toggleHoverState3)
  }

  handleMouseHover4() {
    this.setState(this.toggleHoverState4)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  toggleHoverState2(state) {
    return {
      isHovering2: !state.isHovering2,
    }
  }

  toggleHoverState3(state) {
    return {
      isHovering3: !state.isHovering3,
    }
  }

  toggleHoverState4(state) {
    return {
      isHovering4: !state.isHovering4,
    }
  }


  render() {
    return (
      <div>
        <Display2>Popular Trips</Display2>
        <RowContainer>
          <ColContainer onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
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
            <PinLocation>
              <FaMapMarkerAlt />
              <Location>Jakarta</Location>
            </PinLocation>
            <PinWrapper2>
              <FaMapMarkerAlt />
              <Location>1 Day</Location>
            </PinWrapper2>
            <PinWrapper>Rp200.0000 per orang</PinWrapper>
            {this.state.isHovering && <AllHover />}
          </ColContainer>
          <ColContainer onMouseEnter={this.handleMouseHover2} onMouseLeave={this.handleMouseHover2}>
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
            <PinLocation>
              <FaMapMarkerAlt />
              <Location>Sentul</Location>
            </PinLocation>
            <PinWrapper2>
              <FaMapMarkerAlt />
              <Location>2 Day 1 Night</Location>
            </PinWrapper2>
            <PinWrapper>Rp600.0000 per orang</PinWrapper>
            {this.state.isHovering2 && <AllHover />}
          </ColContainer>
          <ColContainer onMouseEnter={this.handleMouseHover3} onMouseLeave={this.handleMouseHover3}>
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
            <PinLocation>
              <FaMapMarkerAlt />
              <Location>Jawa Barat</Location>
            </PinLocation>
            <PinWrapper2>
              <FaMapMarkerAlt />
              <Location>4 Day 3 Night</Location>
            </PinWrapper2>
            <PinWrapper>Rp2000.0000 per orang</PinWrapper>
            {this.state.isHovering3 && <AllHover />}
          </ColContainer>
          <ColContainer onMouseEnter={this.handleMouseHover4} onMouseLeave={this.handleMouseHover4}>
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
            <PinLocation>
              <FaMapMarkerAlt />
              <Location>Lombok</Location>
            </PinLocation>
            <PinWrapper2>
              <FaMapMarkerAlt />
              <Location>4 Day 3 Night</Location>
            </PinWrapper2>
            <PinWrapper>Rp3000.0000 per orang</PinWrapper>
            {this.state.isHovering4 && <AllHover />}
          </ColContainer>
        </RowContainer>
        <LinkAll>See All Trips ></LinkAll>
      </div>
    )
  }
}
export default PopularTrips
