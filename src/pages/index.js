import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import HELMET from "../components/helmet"
import * as variable from 'src/config.js'
import "react-tabs/style/react-tabs.css";
import GoogleMapReact from 'google-map-react';
import {rgba, darken} from 'polished'
import MechanicalPart from '../images/background.jpg'
import { graphql } from "gatsby"
import OfferSection from '../components/index/offers.js'
import Hero from '../components/index/hero.js'

export default ({ data }) => (
  <Layout BackgroundColor="#f3f3f3">
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
      href="#Directions">
        Directions / Map
      </Tabd>
    </Navigation>
    
    <OfferSection/>

    <EmailContainer id="Email">
      <Text>Want more deals? Sign up for exclusive offers</Text>
      <Input disabled placeholder="Enter your email here" title="Disabled. Still a work in progress."></Input>
      <a href="/">Privacy Statement</a>
    </EmailContainer>
    <Content id="Services">
        <ServicesHeader>Services</ServicesHeader>
    </Content>
    <DirectionsSection id="Directions">
      <MapContainer style={{height: '25rem', width: '100%'}}>
        <MapBtn href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385" target="blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 51.636 51.636"
            version="1.1"
            viewBox="0 0 51.636 51.636"
            xmlSpace="preserve">
            <path d="M51.353.914a.999.999 0 00-1.135-.213L.583 23.481a1 1 0 00.252 1.895l22.263 3.731 2.545 21.038a1.002 1.002 0 001.889.324l24-48.415a1 1 0 00-.179-1.14z" />
          </svg>
        </MapBtn>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
        defaultCenter={{lat: 34.05, lng: -117.68}}
        defaultZoom={11}>
          <Tooltip data-tooltip={data.Site.websiteName} data-tooltip-position="top"
          lat={34.056489}
          lng={-117.685391}></Tooltip>
        </GoogleMapReact>
      </MapContainer>
      <InformationContainer>
        <AddressHeader>Address</AddressHeader> <Address>{data.Site.shopInformation.address}</Address>
        <HoursHeader>Shop Hours</HoursHeader>
        <TableHours>
          <tbody>
            <Row>
              <Data>Monday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Tuesday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Wednesday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Thursday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Friday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Saturday</Data>
              <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
            </Row>
            <Row>
              <Data>Sunday</Data>
              <Data style={{color: `${data.Site.shopInformation.shopHours.sunday === "Closed" ? "black" : "unset"}`,}}>{data.Site.shopInformation.shopHours.sunday}</Data>
            </Row>
          </tbody>
        </TableHours>
      </InformationContainer>
    </DirectionsSection>
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
          offerCard {
            title
            subTitle
            thumbnail {
              fixed {
                src
              }
            }
          }
          contentful_id
        }
      }
    }
  }
`
const ServicesHeader = styled.div``
const MapBtn = styled.a``
const Tooltip = styled.span``
const Tabd = styled.a``
const TableHours = styled.table``
const Row = styled.tr``
const Data = styled.td``
const MapContainer = styled.div``
const Text = styled.p``
const Input = styled.input``
const AddressHeader = styled.p``
const HoursHeader = styled.p``
const InformationContainer = styled.div``
const Address = styled.p``

const DirectionsSection = styled.div`
display: flex;
flex-wrap: wrap;
  ${MapContainer} {
    flex: 1;
    position: relative;
    ${MapBtn} {
      position: absolute;
      bottom: 0.5rem;
      left: 0.5rem;
      background-color: ${variable.SiteColor};
      color: #fff;
      height: 55px;
      width: 55px;
      z-index: 1;
      text-decoration: unset;
      border-radius: 50%;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      transition: all 250ms ease-in-out;
      box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0px 2px 10px -1px ${variable.SiteColor};
        background-color: ${darken(0.12, variable.SiteColor)};
      }
      svg {
        height: 45%;
        width: 45%;
        align-self: center;
        fill: #fff;
        position: relative;
        top: 2px;
        right: 2px;
      }
    }
    ${Tooltip} {
      display: inline-block;
      position: relative;
      cursor: help;
      padding: 4px;
      height: 0.5rem;
      width: 0.5rem;
      background-color: red;
      border-radius: 50%;
      &::before {
        content: attr(data-tooltip);
        position: absolute;
        background: #000;
        color: #fff;
        padding: 4px 8px;
        font-size: 14px;
        line-height: 1.4;
        min-width: 107px;
        text-align: center;
        border-radius: 4px;
        font-family: "Racing Sans One";
      }
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
        z-index: 50;
      }
      &[data-tooltip-position="top"] {
        &::before {
          left: -500%;
          bottom: 100%;
          margin-bottom: 6px;
        }
        &::after {
          left: 50%;
          margin-left: -6px;
          bottom: 100%;
          border-width: 6px 6px 0;
          border-top-color: #000;
        }
      }
    }
  }
  ${InformationContainer} {
    background-color: ${darken(0.08, variable.SiteColor)};
    flex: 1;
    padding: 1rem 1.5rem;
    ${AddressHeader}, ${HoursHeader} {
      color: #fff;
      font-weight: bold;
      font-size: 1.7rem;
      display: -webkit-inline-box;
      position: relative;
      margin-bottom: 0.8rem;
      &::after {
        content: "";
        width: 30%;
        height: 0.2rem;
        position: absolute;
        bottom: -4px;
        left: 0;
        z-index: 1;
        background-color: #fff;
      }
    }
    ${Address} {
      color: #fff;
    }
    ${TableHours} {
      margin: unset;
      margin-top: 0.4rem;
      tbody {
        ${Row} {
          ${Data} {
            padding-top: unset;
            color: #fff;
            border-bottom: unset;
            &:first-child {
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 798px) {
    flex-direction: column;
  }
`

const Content = styled.div`
padding: 10px;
  ${ServicesHeader} {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
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
    opacity: 0.7;
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