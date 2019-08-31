import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as variable from 'src/config.js'
import {darken, rgba} from 'polished'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import GoogleMapReact from 'google-map-react';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Image />
      <QuoteContainer>
        <Call>Call Today Now!</Call>
        <Phone>(909) 282-5198</Phone>
      </QuoteContainer>
        <TTContainer>
          <TabsContainer>
            <TabListt>
              <Tabt>Quote</Tabt>
              <Tabt>Directions</Tabt>
            </TabListt>
        
            <TabPanelt>
            QuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuoteQuote
            </TabPanelt>
            <TabPanelt>
            <div style={{height: '10rem', width: '100%'}}> 
              <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDkZGepwL2AwWxaoTjgadJWRBKWhqIihoQ' }}
              defaultCenter={{lat: 34.05, lng: -117.68}}
              defaultZoom={11}>
                <Tooltip data-tooltip="Cylinder Head Exchange" data-tooltip-position="top"
                lat={34.056489}
                lng={-117.685391}></Tooltip>
              </GoogleMapReact>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta. In iaculis nunc sed augue lacus. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sagittis purus sit amet volutpat consequat mauris. Maecenas volutpat blandit aliquam etiam. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Quis enim lobortis scelerisque fermentum dui faucibus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Augue eget arcu dictum varius duis at consectetur.
            </TabPanelt>
          </TabsContainer>
          <Text>
            <Header>AUTO REPAIR SERVICES</Header>
            <SubHeader>WE ARE THE SOLUTION TO ALL YOUR VEHICLE PROBLEMS FOR THE BEST PRICE GURANTEED!</SubHeader>
          </Text>
        </TTContainer>
      <Actionbtns>
        <Container>
          <Btn
          rel="noreferrer"
          target="_blank"
          href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385">
            Get Directions
          </Btn>
          <Btn 
          href="mailto:support@cylinderheadexchangeshop.com">
            Request Quote
          </Btn>
          <Btn 
          href="tel:909-000-0000">
            Call Us
          </Btn>
        </Container>
      </Actionbtns>
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
const Header = styled.h2`
`
const Phone = styled.div``
const Tooltip = styled.span`
`
const SubHeader = styled.h3`
`
const TabPanelt = styled(TabPanel)`
`
const Text = styled.div`
`
const Call = styled.div``
const Tabt = styled(Tab)`
`
const TabListt = styled(TabList)`
`
const TContainer = styled.div`
`
const TTContainer = styled.div`
`
const TabsContainer = styled(Tabs)`
`
const Btn = styled.a`
`
const Actionbtns = styled.div`
`
const QuoteContainer = styled.div`
`
const RequestBtn = styled.a`
`
const PhoneNumber = styled.a`
`
const Tabd = styled.a`
`
const QuoteBox = styled.div`
`
const QHeader = styled.div`
`
const Body = styled.div`
`
const Container = styled.div`
`

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
    &:hover {
      background-color: #fff;
      color: ${variable.SiteColor};
    }
    &:last-child {
      margin-right: unset;
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
    ${TTContainer} {
      display: flex;
      display: none;
      justify-content: center;
      flex-wrap: wrap;
      margin: 0 2rem;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
      ${TabsContainer} {
        flex: 1;
        overflow: hidden;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: calc(100% - 2rem);
        width: 100%;
        ${TabListt} {
          display: flex;
          margin: unset;
          min-height: 45px;
          ${Tabt} {
            min-height: 45px;
            flex: 1;
            color: rgba(255,255,255,0.8);
            list-style: none;
            padding: 10px 18px;
            text-align: center;
            font-size: 1.3rem;
            font-weight: bold;
            font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
            transition: all linear 200ms;
            background-color: ${darken(0.18,variable.SiteColor)};
            margin: unset;
            z-index: 5;
            &.react-tabs__tab--selected {
              background-color: ${variable.SiteColor};
              color: #fff;
              border-color: ${variable.SiteColor};
            }
            &:focus {
              outline: unset;
            }
            &:first-child {
              border-top-right-radius: 0;
              border-top-left-radius: 7px;
              border-right: 1.5px solid ${darken(0.27,variable.SiteColor)};
            }
            &:last-child {
              border-top-left-radius: 0;
              border-top-right-radius: 7px;
              border-left: 1.5px solid ${darken(0.27,variable.SiteColor)};
            }
            &:hover {
              cursor: pointer;
              color: #fff;
              background-color: ${darken(0.21,variable.SiteColor)};
              &.react-tabs__tab--selected {
                background-color: ${variable.SiteColor};
              }
            }
          }
        }
        ${TabPanelt} {
          background-color: ${variable.SiteColor};
          padding: 10px 15px;
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
          display: none;
          word-break: break-all;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
          &.react-tabs__tab-panel--selected {
            display: block;
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
      }
      ${Text} {
        display: flex;
        flex-direction: column;
        flex: 2;
        padding-left: 25px;
        align-self: center;
        ${Header} {
          color: #fff;
          font-size: 3.4rem;
          margin-bottom: 0.9rem;
          text-shadow: 2px 2px 2px #000;
          max-width: 23rem;
          line-height: 94%;
        }
        ${SubHeader} {
          margin: unset;
          max-width: calc(100% - 14rem);
          color: #fff;
          font-weight: normal;
          line-height: 135%;
          text-shadow: 2px 2px 2px #000;
        }
      }
    }
  ${QuoteContainer} {
    background-color: ${rgba(variable.SiteColor, 0.5)};
    position: absolute;
    left: 0;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 3.5rem;
    z-index: 2;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    ${Call} {
      text-align: center;
      color: #fff;
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 1.1rem;
    }
    ${Phone} {
      color: #fff;
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 719px) {
    ${TContainer} {
      ${TTContainer} {
        
        ${TabsContainer} {
          
          ${TabPanelt} {
             
          }
        }
        ${Text} {
          display: none;
        }
      }
    }
    ${QuoteContainer} {
      display: none;
    }
    ${Actionbtns} {
      display: flex;
      display: none;
    }
  }
  @media screen and ${variable.iP5s} {
    ${Actionbtns} {
      ${Container} {
        ${Btn} {
          padding: 10px 45px;
          font-size: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 790px) {
    ${TTContainer} {
      width: 100%;
      margin: unset;
      ${TabsContainer} {
        margin: 0 1rem;
      }
      ${Text} {
        display: none;
      }
    }
  }
`