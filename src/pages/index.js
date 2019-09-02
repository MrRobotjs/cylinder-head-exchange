import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as variable from 'src/config.js'
import {darken} from 'polished'
import "react-tabs/style/react-tabs.css";
import GoogleMapReact from 'google-map-react';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Image />
      <QuoteContainer>
        <ScheduleHeader>Schedule Appointment</ScheduleHeader>
        <DetailsContainer>
          <Left>
            <LocationHeader>Our Location:</LocationHeader>
            <Directions>5498 W Mission Blvd A, Ontario, CA 91762</Directions>
            <MapContainer style={{height: '8rem', width: '100%'}}> 
              <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
              defaultCenter={{lat: 34.05, lng: -117.68}}
              defaultZoom={11}>
                <Tooltip data-tooltip="Cylinder Head Exchange" data-tooltip-position="top"
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
              </svg> 909.282.5198</Call>
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
              <Row>
                <Data>MON-SAT:</Data>
                <Data>7:00am-7:00pm</Data>
              </Row>
              <Row>
                <Data>SUN</Data>
                <Data style={{color: "red",}}>Closed</Data>
              </Row>
              </TableHours>
            </HoursContainer>
          </Left>
          <Right>
            <MapContainer style={{height: '8rem', width: '100%'}}> 
              <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
              defaultCenter={{lat: 34.05, lng: -117.68}}
              defaultZoom={11}>
                <Tooltip data-tooltip="Cylinder Head Exchange" data-tooltip-position="top"
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
          <Row>
            <Data>MON-SAT:</Data>
            <Data>7:00am-7:00pm</Data>
          </Row>
          <Row>
            <Data>SUN</Data>
            <Data style={{color: "red",}}>Closed</Data>
          </Row>
          </TableHours>
        </HoursContainer>
      </QuoteContainer>
    </Hero>
    <Navigation>
      <Tabd
      href="#top">
        Services
      </Tabd>
      <Tabd
      href="#bottom">
        Directions
      </Tabd>
      <Tabd
      href="#bottom">
        About Us
      </Tabd>
      <Tabd
      href="">
        refresh
      </Tabd>
    </Navigation>
    <h2 id="top">My Cool Header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta. In iaculis nunc sed augue lacus. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sagittis purus sit amet volutpat consequat mauris. Maecenas volutpat blandit aliquam etiam. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Quis enim lobortis scelerisque fermentum dui faucibus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Augue eget arcu dictum varius duis at consectetur.

Odio euismod lacinia at quis risus sed vulputate odio. Diam maecenas ultricies mi eget mauris. Et ultrices neque ornare aenean. Id aliquet risus feugiat in. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Pulvinar pellentesque habitant morbi tristique senectus. Diam vulputate ut pharetra sit amet aliquam id. Ultrices sagittis orci a scelerisque purus. Amet risus nullam eget felis. Et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Pellentesque pulvinar pellentesque habitant morbi. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Adipiscing tristique risus nec feugiat in. Non odio euismod lacinia at quis risus sed. Rhoncus dolor purus non enim praesent.

Vel risus commodo viverra maecenas accumsan lacus. At volutpat diam ut venenatis tellus in. At auctor urna nunc id cursus metus aliquam eleifend. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Placerat duis ultricies lacus sed. Consectetur adipiscing elit duis tristique sollicitudin. Scelerisque fermentum dui faucibus in ornare quam. Pellentesque massa placerat duis ultricies lacus sed turpis. Vitae auctor eu augue ut lectus. Purus in mollis nunc sed id. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vel orci porta non pulvinar neque laoreet suspendisse.

Sem nulla pharetra diam sit amet nisl suscipit. Urna porttitor rhoncus dolor purus non enim praesent. Amet risus nullam eget felis. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sem viverra aliquet eget sit amet tellus. Amet volutpat consequat mauris nunc. Elementum sagittis vitae et leo duis. Imperdiet proin fermentum leo vel orci porta. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Purus non enim praesent elementum facilisis. Interdum posuere lorem ipsum dolor sit amet. Vitae suscipit tellus mauris a. Est pellentesque elit ullamcorper dignissim cras. Erat nam at lectus urna duis convallis convallis tellus id. Eget sit amet tellus cras adipiscing.

Viverra vitae congue eu consequat ac. Donec pretium vulputate sapien nec sagittis. In hendrerit gravida rutrum quisque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Varius quam quisque id diam vel quam. Urna nec tincidunt praesent semper feugiat nibh. Urna neque viverra justo nec ultrices dui sapien. Aliquam sem fringilla ut morbi. Scelerisque in dictum non consectetur a erat nam. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nunc id cursus metus aliquam eleifend mi in. Lorem donec massa sapien faucibus et molestie ac feugiat. Sit amet purus gravida quis blandit. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Id semper risus in hendrerit. At elementum eu facilisis sed odio morbi quis commodo.</p>
    <p>Now go build something great.</p>
    <h2 id="bottom">My Cool Header</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
const Tooltip = styled.span``
const LocationHeader = styled.div``
const Btn = styled.a``
const Actionbtns = styled.div``
const QuoteContainer = styled.div``
const Tabd = styled.a``
const Container = styled.div``
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

const Navigation = styled.div`
  display: flex;
  position: sticky;
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
    font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
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
  max-height: calc(100vh - 3rem);
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
  }
  ${Actionbtns} {
    display: none;
    flex-direction: column;
    position: absolute;
    margin: 0 auto;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    justify-content: center;
    ${Container} {
      display: flex;
      flex-direction: column;
      max-width: 320px;
      margin: 0 auto;
      ${Btn} {
        margin: 0 auto;
        background-color: ${variable.SiteColor};
        color: #fff;
        text-decoration: unset;
        text-align: center;
        padding: 13px 75px;
        margin-bottom: 1rem;
        width: 100%;
        font-size: 1.13rem;
        transition: background-color 250ms ease-in-out;
        &:last-child {
          margin-bottom: unset;
        }
        &:first-child {
          background-color: #fff;
          color: ${variable.SiteColor};
        }
        &:hover {
          background-color: ${darken(0.18, variable.SiteColor)};
          color: #fff;
        }
      }
    }
  }
  ${QuoteContainer} {
    background-color: #f6f4f4;
    position: absolute;
    left: 1rem;
    height: 93%;
    top: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    z-index: 2;
    overflow: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
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
  @media screen and (max-width: 719px) {
    ${QuoteContainer} {
      width: 92%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  @media screen and (max-width: 719px) {
    ${QuoteContainer} {
      width: 92%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  @media screen and (max-width: 475px) {
    ${QuoteContainer} {
      height: 86%;
      padding-bottom: 0.4rem;
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