import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import HELMET from "../components/helmet"
import * as variable from 'src/config.js'
import "react-tabs/style/react-tabs.css";
import GoogleMapReact from 'google-map-react';
import NotFound from '../images/notfound.jpg'
import Card from '../components/offer-card'
import {rgba, darken} from 'polished'
import MechanicalPart from '../images/background.jpg'
import { graphql } from "gatsby"
import TextLoop from "react-text-loop";


export default ({ data }) => (
  <Layout BackgroundColor="#f3f3f3">
    <HELMET title="Home" description="Description coming from Index" />
    <Hero2>
      <HeroHeader>Need Service? We can provide</HeroHeader>
      <TextLoop className="Loop" mask={true}>
        <HeaderLoop>Cylinder Head Exchange</HeaderLoop>
        <HeaderLoop>Oil Change</HeaderLoop>
        <HeaderLoop>Tune-Ups</HeaderLoop>
        <HeaderLoop>Full Check Up</HeaderLoop>
      </TextLoop>
      <Phone>{data.Site.shopInformation.phoneNumber}</Phone>
    </Hero2>
    <Hero>
      <Image />
      <QuoteContainer>
        <ScheduleHeader>Schedule Appointment</ScheduleHeader>
        <DetailsContainer>
          <Left>
            <LocationHeader>Our Location:</LocationHeader>
            <Directions>{data.Site.shopInformation.address}</Directions>
              <MapContainer style={{height: '8rem', width: '100%'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
                defaultCenter={{lat: 34.05, lng: -117.68}}
                defaultZoom={11}>
                  <Tooltip data-tooltip={data.Site.websiteName} data-tooltip-position="top"
                  lat={34.056489}
                  lng={-117.685391}></Tooltip>
                </GoogleMapReact>
              </MapContainer>
            <Center>
              <Call href="tel:909-282-5198">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 480.56 480.56"
                version="1.1"
                viewBox="0 0 480.56 480.56"
                xmlSpace="preserve"
              >
                <path d="M365.354 317.9c-15.7-15.5-35.3-15.5-50.9 0-11.9 11.8-23.8 23.6-35.5 35.6-3.2 3.3-5.9 4-9.8 1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3 1.8-9.4 11.9-11.5 23.5-23.3 35.2-35.1 16.3-16.4 16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12 11.8-23.5 23.9-35.7 35.5-11.3 10.7-17 23.8-18.2 39.1-1.9 24.9 4.2 48.4 12.8 71.3 17.6 47.4 44.4 89.5 76.9 128.1 43.9 52.2 96.3 93.5 157.6 123.3 27.6 13.4 56.2 23.7 87.3 25.4 21.4 1.2 40-4.2 54.9-20.9 10.2-11.4 21.7-21.8 32.5-32.7 16-16.2 16.1-35.8.2-51.8-19-19.1-38.1-38.1-57.2-57.1zM346.254 238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89-25.7-25.7-58.2-41.9-94-46.9l-5.2 37.1c27.7 3.9 52.9 16.4 72.8 36.3 18.8 18.8 31.1 42.6 35.6 68.8zM403.954 77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2 37.1c51.4 7.2 98 30.5 134.8 67.2 34.9 34.9 57.8 79 66.1 127.5l36.9-6.3c-9.7-56.2-36.2-107.2-76.6-147.7z" />
              </svg> {data.Site.shopInformation.phoneNumber}</Call>
              <DirectionsBtn
              href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385"
              target="_blank"
              rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 430.114 430.114"
                  version="1.1"
                  viewBox="0 0 430.114 430.114"
                  xmlSpace="preserve">
                  <path d="M356.208 107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746 23.704 261.611 0 213.055 0 148.054 0 76.463 43.586 66.905 133.427v18.355c0 .766.264 7.647.639 11.089 5.358 42.816 39.143 88.32 64.375 131.136 27.146 45.873 55.314 90.999 83.221 136.106 17.208-29.436 34.354-59.259 51.17-87.933 4.583-8.415 9.903-16.825 14.491-24.857 3.058-5.348 8.9-10.696 11.569-15.672 27.145-49.699 70.838-99.782 70.838-149.104v-20.262c.001-5.347-6.627-24.081-7-25.234zm-141.963 92.142c-19.107 0-40.021-9.554-50.344-35.939-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636 28.56-48.932 53.406-48.932 30.588 0 54.245 24.472 54.245 55.06 0 30.587-25.305 55.051-55.893 55.051z" />
                </svg>
                 Directions</DirectionsBtn>
            </Center>
            <HoursContainer>
              <ShopHeader>Shop Hours:</ShopHeader>
              <TableHours>
                <tbody>
                  <Row>
                    <Data>MON-SAT:</Data>
                    <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
                  </Row>
                  <Row>
                    <Data>SUN</Data>
                    <Data style={{color: `${data.Site.shopInformation.shopHours.sunday === "Closed" ? "red" : "unset"}`,}}>{data.Site.shopInformation.shopHours.sunday}</Data>
                  </Row>
                </tbody>
              </TableHours>
            </HoursContainer>
          </Left>
          <Right>
            <MapContainer style={{height: '8rem', width: '100%'}}>
              <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
              defaultCenter={{lat: 34.05, lng: -117.68}}
              defaultZoom={11}>
                <Tooltip data-tooltip={data.Site.websiteName} data-tooltip-position="top"
                lat={34.056489}
                lng={-117.685391}></Tooltip>
              </GoogleMapReact>
            </MapContainer>
            <Center>
              <DirectionsBtn
              href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385"
              target="_blank"
              rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 430.114 430.114"
                  version="1.1"
                  viewBox="0 0 430.114 430.114"
                  xmlSpace="preserve">
                  <path d="M356.208 107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746 23.704 261.611 0 213.055 0 148.054 0 76.463 43.586 66.905 133.427v18.355c0 .766.264 7.647.639 11.089 5.358 42.816 39.143 88.32 64.375 131.136 27.146 45.873 55.314 90.999 83.221 136.106 17.208-29.436 34.354-59.259 51.17-87.933 4.583-8.415 9.903-16.825 14.491-24.857 3.058-5.348 8.9-10.696 11.569-15.672 27.145-49.699 70.838-99.782 70.838-149.104v-20.262c.001-5.347-6.627-24.081-7-25.234zm-141.963 92.142c-19.107 0-40.021-9.554-50.344-35.939-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636 28.56-48.932 53.406-48.932 30.588 0 54.245 24.472 54.245 55.06 0 30.587-25.305 55.051-55.893 55.051z" />
                </svg>
                 Directions</DirectionsBtn>
            </Center>
          </Right>
        </DetailsContainer>
        <HoursContainer>
          <ShopHeader>Shop Hours:</ShopHeader>
          <TableHours>
            <tbody>
              <Row>
                <Data>MON-SAT:</Data>
                <Data>{data.Site.shopInformation.shopHours.mondaySaturday}</Data>
              </Row>
              <Row>
                <Data>SUN:</Data>
                <Data style={{color: `${data.Site.shopInformation.shopHours.sunday === "Closed" ? "red" : "unset"}`,}}>{data.Site.shopInformation.shopHours.sunday}</Data>
              </Row>
            </tbody>
          </TableHours>
        </HoursContainer>
      </QuoteContainer>
      <HeroText>
        <PrimaryText>Need a Repair?</PrimaryText>
        <SecondaryText>We can repair </SecondaryText>
      </HeroText>
    </Hero>
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
      href="#Info">
        Information
      </Tabd>
      <Tabd
      href="/">
        refresh
      </Tabd>
    </Navigation>
    <OffersHeader id="Offers">Featured Coupons and Offers</OffersHeader>
      <Smalltext>TERMS AND CONDITIONS APPLY</Smalltext>
    <OffersContainer>
      {data.All.edges.map(({ node }) => (
        <Card
        key={node.contentful_id}
        offerTitle={node.title}
        Id={node.contentful_id}
        Image={node.offerCard.thumbnail ?
          node.offerCard.thumbnail.fixed.src
        :
          NotFound
        }
        Titlee={node.offerCard ?
          node.offerCard.title
        :
          node.title
        }
        SubTitlee={node.offerCard.subTitle ?
          node.offerCard.subTitle
        :
          ""
        }
        ExpirationDate={node.expirationDate ?
          node.expirationDate
        :
          "Missing Date"
        }
        />
      ))}
    </OffersContainer>
    <OfferContainer>
      <OffersBtn to="/offers/">View All Offers</OffersBtn>
    </OfferContainer>
    <EmailContainer id="Email">
      <Text>Want more deals? Sign up for exclusive offers</Text>
      <Input disabled placeholder="Enter your email here" title="Disabled. Still a work in progress."></Input>
      <a href="/">Privacy Statement</a>
    </EmailContainer>
    <Content id="Services">
        <ServicesHeader>Services</ServicesHeader>
    </Content>
    <DirectionsSection id="Info">
      <MapContainer style={{height: '25rem', width: '100%'}}>
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
              <Data>SUN</Data>
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
const SecondaryText =styled.div``
const PrimaryText = styled.div``
const Tooltip = styled.span``
const LocationHeader = styled.div``
const QuoteContainer = styled.div``
const Tabd = styled.a``
const ScheduleHeader = styled.div``
const Left = styled.div``
const Right = styled.div``
const DetailsContainer = styled.div``
const DirectionsBtn = styled.a``
const Directions = styled.div``
const Call = styled.a``
const Center = styled.div``
const ShopHeader = styled.div``
const TableHours = styled.table``
const Row = styled.tr``
const Data = styled.td``
const HoursContainer = styled.div``
const MapContainer = styled.div``
const HeroText = styled.div``
const OffersBtn = styled(Link)``
const Text = styled.p``
const Input = styled.input``
const HeroHeader = styled.h1``
const HeaderLoop = styled.h2``
const Phone = styled.div``
const InformationContainer = styled.div``
const Address = styled.p``
const AddressHeader = styled.p``
const HoursHeader = styled.p``
const DirectionsSection = styled.div`
display: flex;
flex-wrap: wrap;
  ${MapContainer} {
    flex: 1;
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
    background-color: ${variable.SiteColor};
    flex: 1;
    padding: 1rem 1.5rem;
    ${AddressHeader}, ${HoursHeader} {
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
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

const Hero2 = styled.div`
max-height: calc(100vh - 7rem); /* - 3rem to make image full screen of monitor minus the header height */
display: flex;
justify-content: center;
flex-direction: column;
background-color: #fff;
padding: 1.6rem 0.8rem;
display: none;
${HeroHeader} {
  text-align: center;
  margin-bottom: 0.8rem;
  font-weight: bold;
  font-size: 2.8rem;
}
.Loop {
  margin: 0 auto;
  padding-bottom: 3px;
  ${HeaderLoop} {
    font-size: 2.8rem;
    line-height: 1.1;
    margin: unset;
    text-align: center;
    font-weight: bold;
  }
}
${Phone} {
  text-align: center;
  font-weight: bold;
  color: ${variable.SiteColor};
  margin-top: 0.7rem;
  font-size: 2.1rem;
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

const OfferContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 0.8rem;
  ${OffersBtn} {
    margin-bottom: auto;
    transition: all 285ms linear;
    color:  ${variable.SiteColor};
    text-decoration: unset;
    border: 1px solid;
    padding: 0.3rem 0.7rem;
    &:hover {
      background-color: ${variable.SiteColor};
      color: white;
    }
  }
`

const Smalltext = styled.p`
  text-align: center;
  color: #a2a2a2;
  font-size: 0.6rem;
  text-transform: lowercase;
`

const OffersHeader = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 0 1rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  transform: scale(1,1.18);
  letter-spacing: -1px;
`

const OffersContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 0.8rem;
justify-content: center;
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

const Hero = styled.div`
  max-height: calc(100vh - 7rem); /* - 3rem to make image full screen of monitor minus the header height */
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    content: ' ';
    background-color: rgba(0,0,0,.5);
    z-index: 1;
    display: none;
  }
  ${HeroText} {
    position: absolute;
    right: 1rem;
    height: 93%;
    top: 1rem;
    display: flex;
    display: none !important;
    flex-direction: column;
    padding: 1.5rem 0;
    z-index: 2;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    justify-content: center;
    ${PrimaryText} {
      color: #fff;
      font-weight: bold;
      align-self: flex-end;
      font-size: 5rem;
      z-index: 1;
    }
    ${SecondaryText} {
      color: #fff;
      font-weight: bold;
      align-self: flex-end;
      font-size: 3rem;
      z-index: 1;
    }
  }
  ${QuoteContainer} {
    background-color: #f6f4f4;
    position: absolute;
    left: 1rem;
    height: 93%;
    height: unset;
    top: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    z-index: 2;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    ${ScheduleHeader} {
      color: ${variable.SiteColor};
      font-size: 1.3rem;
      padding: 0.55rem 0;
      text-transform: uppercase;
      padding-top: unset;
      font-weight: 700;
      border-bottom: 1px solid #000;
      margin: 0 1rem;
      margin-bottom: 1.2rem;
      letter-spacing: -1px;
      transform: scale(1, 1.18);
    }
    ${DetailsContainer} {
      display: flex;
      margin: 0 1rem;
      margin-bottom: 0.2rem;
      ${Left} {
        flex: 1;
        padding-right: 0.2rem;
        ${MapContainer} {
          display: none;
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
        ${HoursContainer} {
          display: none;
          ${ShopHeader} {
            margin: unset;
          }
          ${TableHours} {
            margin: unset;
          }
        }
        ${LocationHeader} {
          color: #000;
          margin-bottom: 1.2rem;
          font-weight: 800;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: -1px;
          white-space: nowrap;
          transform: scale(1, 1.18);
        }
        ${Directions} {
          font-weight: 600;
          font-size: 1.06rem;
        }
        ${Center} {
          text-align: center;
          margin-top: 0.5rem;
          ${Call} {
            color: ${variable.SiteColor};
            font-size: 1.3rem;
            text-align: center;
            padding: 0.4rem 0.9rem;
            font-weight: bold;
            display: inline-block;
            text-decoration: unset;
            margin-left: -5px;
            svg {
              height: 17px;
              width: 17px;
              margin-right: 2px;
              fill: ${variable.SiteColor};
            }
            &:hover {
              background-color: ${variable.SiteColor};
              color: #fff;
              svg {
                fill: #fff;
              }
            }
          }
          ${DirectionsBtn} {
            display: none;
          }
        }
      }
      ${Right} {
        flex: 1;
        ${MapContainer} {
          position: relative;
          ${MapBtn} {
            position: absolute;
            background-color: ${darken(0.16, variable.SiteColor)};
            color: #fff;
            padding: 3px 8px;
            bottom: 3px;
            border-radius: ${variable.BtnBorderRadius};
            opacity: 0.6;
            left: 3px;
            z-index: 1;
            text-decoration: unset;
            transition: 280ms linear all;
            &:hover {
              opacity: 1;
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
        ${Center} {
          text-align: center;
          margin-top: 0.5rem;
          ${DirectionsBtn} {
            color: ${variable.SiteColor};
            font-size: 1.3rem;
            text-align: center;
            padding: 0.4rem 0.9rem;
            font-weight: bold;
            display: inline-block;
            text-decoration: unset;
            margin: 0rem -1rem;
            svg {
              height: 17px;
              width: 17px;
              margin-right: 6px;
              fill: ${variable.SiteColor};
            }
            &:hover {
              background-color: ${variable.SiteColor};
              color: #fff;
              svg {
                fill: #fff;
              }
            }
          }
        }
      }
    }
    ${HoursContainer} {
      display: block;
      ${ShopHeader} {
        margin: 0 1rem;
        color: #000;
        margin-bottom: 0.7rem;
        font-weight: 800;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: -1px;
        white-space: nowrap;
        transform: scale(1, 1.18);
      }
      ${TableHours} {
        margin: 0 1rem;
        ${Row} {
          ${Data} {
            border: unset;
            font-weight: 700;
            padding: unset;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1080px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 4rem;
      }
      ${SecondaryText} {

      }
    }
  }
  @media screen and (max-width: 964px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 3rem;
      }
      ${SecondaryText} {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 854px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 2.5rem;
      }
      ${SecondaryText} {
          font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 798px) {
    ${HeroText} {
      display: none;
      ${PrimaryText} {
        font-size: 2.5rem;
      }
      ${SecondaryText} {
          font-size: 1.5rem;
      }
    }
    ${QuoteContainer} {
      width: 92%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  @media screen and (max-width: 698px) {
    ${QuoteContainer} {
      height: 86%;
      padding-bottom: 0.4rem;
    }
  }
  @media screen and (max-height: 503px) {
    ${QuoteContainer} {
      height: 86%;
      padding-bottom: 0.4rem;
    }
  }
  @media screen and (max-width: 475px) {
    ${QuoteContainer} {
      ${HoursContainer} {
        display: none;
      }
      ${DetailsContainer} {
        margin-bottom: unset;
        ${Right} {
          display: none;
        }
        ${Left} {
          ${Center} {
            ${Call} {
              display: none;
            }
            ${DirectionsBtn} {
              color: ${variable.SiteColor};
              font-size: 1.3rem;
              text-align: center;
              padding: 0.4rem 0.9rem;
              font-weight: bold;
              display: inline-block;
              text-decoration: unset;
              margin: 0rem -1rem;
              svg {
                height: 17px;
                width: 17px;
                margin-right: 6px;
                fill: ${variable.SiteColor};
              }
              &:hover {
                background-color: ${variable.SiteColor};
                color: #fff;
                svg {
                  fill: #fff;
                }
              }
            }
          }
          ${LocationHeader} {
            margin-bottom: 0.9rem;
          }
          ${Directions} {
            margin-bottom: 0.5rem;
          }
          ${HoursContainer} {
            display: block;
            margin-top: 0.6rem;
            margin-bottom: 0.4rem;
            ${ShopHeader} {
              margin-bottom: 0.7rem;
            }
          }
          ${MapContainer} {
            display: initial;
          }
        }
      }
    }
  }
`
