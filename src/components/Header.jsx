import React from 'react'
import styled from 'react-emotion'
import Slideshow from './Slider.jsx'
import Bgheader from '../images/bg-header.png'
import TripIcon from '../images/trip-creator-icon.png'
import MerchantIcon from '../images/merchant-icon.png'
import TravelerIcon from '../images/traveler-icon.png'

const ContainerHeader = styled('div')`
  display: flex;
  flex-flow: column nowrap;
`

const Background = styled('img')`
  z-index: 1;
  display: flex;
  justify-content: center;
  height: 70%;
`

const BigText = styled('div')`
  font-size: 60px;
  color: #fff;
  z-index: 2;
  position: relative;
  text-align: center;
  margin-top: -350px;
`
const Desc = styled('div')`
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
  z-index: 2;
  position: relative;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
`

const Button = styled('button')`
  height: 44px;
  width: 250px;
  border-radius: 5px;
  background: linear-gradient(45deg, #f36d7c 0%, #fe7676 100%);
  color: #ffffff;
  font-size: 20px;
  margin-top: 100px;
  z-index: 2;
  align-self: center;
  @media (max-width: 600px) {
    margin-top: 30px;
  }
`

const ContainerDesc = styled('div')`
  margin-top: 135px;
  height: 500px;
`

const TitleContent = styled('div')`
  color: #4a4a4a;
  font-size: 45px;
  text-align: center;
  margin-top: 100px;
  @media (max-width: 600px) {
    margin-top: -50px;
  }
`
const DescWork = styled('div')`
  color: #9b9b9b;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  margin-top: 20px;
`

const BoxIcon = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const IconContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: center;
`

const IconTitle = styled('div')`
  margin-top: 10px;
  color: #4a4a4a;
  font-size: 20px;
  font-weight: 500;
`
const IconDesc = styled('div')`
  margin-top: 10px;
  text-align: center;
  color: #4a4a4a;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
`

const SliderContainer = styled('div')`
  width: 500px;
  height: 500px;
  margin-left: 20px;
  margin-right: 20px;
`

const Icon = styled('img')``

const IconList = () => (
  <BoxIcon>
    <IconContainer>
      <Icon src={TripIcon} alt="Trip Creator" />
      <IconTitle>Trip Creator</IconTitle>
      <IconDesc>
        You. If you have extra time to earn extra
        <br /> cash by doing the world's most fun thing to do;
        <br /> travel.
      </IconDesc>
    </IconContainer>
    <IconContainer>
      <Icon src={MerchantIcon} alt="Merchant" />
      <IconTitle>Merchant</IconTitle>
      <IconDesc>
        You. If you own business related to travel;
        <br />
        restaurants, bike rent, boat rent, recreation
        <br />
        site, you name it.
      </IconDesc>
    </IconContainer>
    <IconContainer>
      <Icon src={TravelerIcon} alt="Traveler Creator" />
      <IconTitle>Traveler Creator</IconTitle>
      <IconDesc>
        You. If you would love to experience a new
        <br /> way of travelling that suits your personal
        <br />
        preferences best.
      </IconDesc>
    </IconContainer>
  </BoxIcon>
)

const Line = styled('div')`
  width: 100%;
  height: 1px;
  background-color: #d4d4d4;
  margin-top: 30px;
`

const TitleHotTrip = styled('div')`
  color: #4a4a4a;
  font-size: 45px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Home = () => (
  <div>
    <ContainerHeader>
      <Background src={Bgheader} />
      <BigText>Experience. People. Trip.</BigText>
      <Desc>Marketplace that connects you with another you in another place</Desc>
      <Button>Be a Trip Creator</Button>
    </ContainerHeader>
    <ContainerDesc>
      <TitleContent>How We Work</TitleContent>
      <DescWork>
        Ululatrip is an activity platform that connects 3 main actors in
        <br />
        the world of travelling
      </DescWork>
      <IconList />
      <Line />
      <TitleHotTrip>Hot Trip Package</TitleHotTrip>
      <SliderContainer>
        <Slideshow />
      </SliderContainer>
    </ContainerDesc>
  </div>
)

export default Home
