import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import HELMET from "../components/helmet"
import * as variable from 'src/config.js'
import "react-tabs/style/react-tabs.css";
import {rgba, darken} from 'polished'
import MechanicalPart from '../images/background.jpg'
import { graphql } from "gatsby"
import OfferSection from '../components/index/offers.js'
import Hero from '../components/index/hero.js'
import DirectionsHours from '../components/index/directions-hours'
import WhyUs from '../components/index/why-us'
import { Link } from "gatsby"

/*#f3f3f3*/
export default ({ data }) => (
  <Layout BackgroundColor="#fff">
    <HELMET title="Home" description="Description coming from Index" />

    <Hero/>

    <Navigation>
      <Tabd
      href="#Offers">
        Offers
      </Tabd>
      <Tabd
      href="#Email">
        Email Subscription
      </Tabd>
      <Tabd
      href="#Services">
        Services
      </Tabd>
      <Tabd
      href="#Map">
        Map / Info
      </Tabd>
    </Navigation>
    
    <OfferSection
    AllOffers={data.All}/>

    <EmailContainer id="Email">
      <Text>Want more deals? Sign up for exclusive offers</Text>
      <Input disabled placeholder="Enter your email here" title="Disabled. Still a work in progress."></Input>
      <a href="/">Privacy Statement</a>
    </EmailContainer>
    
    <Content id="Services">
        <ServicesHeader>Services</ServicesHeader>
        <ServicesDescription>This a description for the service. This a description for the service. This a description for the service. This a description for the service</ServicesDescription>
        <Container>

          <Card>
            <Url to={"/offers/offer/"}>Title</Url>
            <Top>
              <IconContainer>
                <Icon>
                  
                </Icon>
              </IconContainer>
            </Top>
            <Bottom>
              <Title>title</Title>
              <Desc>This a description for the service</Desc>
              <Claim to={"/offers/offer/"}>Read More</Claim>
            </Bottom>
          </Card>

          <Card>
            <Url to={"/offers/offer/"}>Title</Url>
            <Top>
              <IconContainer>
                <Icon>
                  
                </Icon>
              </IconContainer>
            </Top>
            <Bottom>
              <Title>title</Title>
              <Desc>This a description for the service</Desc>
              <Claim to={"/offers/offer/"}>Read More</Claim>
            </Bottom>
          </Card>

          <Card>
            <Url to={"/offers/offer/"}>Title</Url>
            <Top>
              <IconContainer>
                <Icon>
                  
                </Icon>
              </IconContainer>
            </Top>
            <Bottom>
              <Title>title</Title>
              <Desc>This a description for the service. This a description for the service</Desc>
              <Claim to={"/offers/offer/"}>Read More</Claim>
            </Bottom>
          </Card>
        </Container>
    </Content>

    <DirectionsHours
    WebsiteName={data.Site.websiteName}
    ShopAddress={data.Site.shopInformation.address}
    MonSat={data.Site.shopInformation.shopHours.mondaySaturday}
    Sun={data.Site.shopInformation.shopHours.sunday}/>

    <WhyUs />

  </Layout>
)

export const query = graphql`
  query {
    Site: contentfulWebsiteInformation {
      websiteName
      shopInformation {
        address
        phoneNumber
        shopHours {
          sunday
          mondaySaturday
        }
      }
    },
    All: allContentfulOffer(limit: 6) {
      totalCount
      edges {
        node {
          title
          createdAt
          expirationDate(formatString: "MMMM Do, YYYY")
          type
          offerCard {
            title
          }
          contentful_id
        }
      }
    }
  }
`
const ServicesHeader = styled.div``
const Tabd = styled.a``
const Text = styled.p``
const Input = styled.input``
const Top = styled.div``
const Bottom = styled.div``
const Icon = styled.div``
const IconContainer = styled.div``
const Title = styled.p``
const Url = styled(Link)``
const Claim = styled(Link)``
const Card = styled.div``
const Container = styled.div``
const Desc = styled.div``
const ServicesDescription = styled.div``

const Content = styled.div`
padding: 10px;
  ${ServicesHeader} {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: 0.4rem;
  }
  ${ServicesDescription} {
    color: #828282;
    text-align: center;
    margin-bottom: 1.6rem;
  }
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5rem;
    justify-content: center;
    ${Card} {
      background-color: #fff;
      box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
      flex-basis: 15.3rem;
      border-radius: 0.4rem;
      margin: 0 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      transition: all linear 260ms;
      display: flex;
      flex-direction: column;
      text-decoration: unset;
      ${Url} {
        font-size: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        color: transparent;
      }
      ${Top} {
        height: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${IconContainer} {
          align-self: center;
          border-radius: 50%;
          height: 85px;
          width: 85px;
          box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all linear 260ms;
          ${Icon} {
            align-self: center;
            border-radius: 50%;
            height: 65px;
            width: 65px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            svg {
              height: 55%;
              width: 55%;
              align-self: center;
              fill: #fff;
            }
          }
        }
      }
      ${Bottom} {
        padding: 1rem 1.5rem;
        padding-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        ${Title} {
          text-align: center;
          font-weight: bold;
          margin: unset;
          font-size: 1.2rem;
          color: #000;
        }
        ${Desc} {
          color: #000;
        }
        ${Claim} {
          align-self: center;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 3px;
          margin-top: auto;
          margin-top: 1.2rem;
          font-weight: bold;
          font-size: 1rem;
          z-index: 1;
          transition: all linear 260ms;
          color: #00c99d;
          background-color: ${rgba("#00c99d", 0.1)};
          &:hover {
            background-color: #00c99d;
            color: #fff;
          }
        }
      }
      &:hover {
        ${Url} {
          visibility: visible;
        }
        ${Top} {
          ${IconContainer} {
            transform: translateY(-4px);
          }
        }
      }
      &:hover,
      &:active,
      &:focus {
        /*box-shadow: 2px 2px 15px 0 rgba(60,60,60,.2);*/
        background-color: #f5f5f5;
      }
      @media screen and (max-width: 1081px) {
        &:nth-child(5) {
          display: none;
        }
        &:nth-child(6) {
          display: none;
        }
      }
      @media screen and (max-width: 729px) {
        flex-basis: 24rem;
        &:nth-child(4) {
          display: none;
        }
      }
      @media screen and (max-width: 450px) {
        flex-basis: 21rem;
      }
      @media screen and (max-width: 380px) {
        flex-basis: 18rem;
      }
      @media screen and (max-width: 310px) {
        flex-basis: 16rem;
      }
    }
  }
`

const EmailContainer = styled.div`
width: 100%;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-evenly;
&::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${MechanicalPart});
  background-size: cover;
  background-repeat: no-repeat;
}
&::after {
  content: "";
  background-color: ${rgba(darken(0.4, variable.SiteColor), 0.8)};
  position: absolute;
  width: 100%;
  height: 100%;
}
${Text} {
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 1.5rem;
  margin: 1.5rem 1.5rem 1rem 1.5rem;
  z-index: 1;
}
${Input} {
  margin: 0 auto;
  display: block;
  width: 18rem;
  border: unset;
  padding: 0.2rem 0.4rem;
  z-index: 1;
  border: unset;
  border-radius: 3px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  &[disabled] {
    opacity: 0.4;
  }
}
a {
  color: #fff;
  display: block;
  text-align: center;
  margin: 1rem 1.5rem 1.5rem 1.5rem;
  z-index: 1;
}
`

const Navigation = styled.div`
  z-index: 1;
  display: flex;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: ${variable.SiteColor};
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12);
  justify-content: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  ${Tabd} {
    color: #fff;
    text-decoration: unset;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: bold;
    transition: all 250ms ease-in-out;
    white-space: nowrap;
    margin: 0 0.5rem;
    &:hover {
      background-color: #fff;
      color: ${variable.SiteColor};
    }
    &:last-child {
      margin-right: unset;
    }
  }
  @media screen and (max-width: 719px) {
    justify-content: unset;
    ${Tabd} {
      margin: unset;
    }
  }
`