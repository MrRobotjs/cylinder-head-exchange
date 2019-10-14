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
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512pt"
                  height="512pt"
                  viewBox="0 -27 512 512">
                    <path d="M478 79.473h-20.02l.02-35.79C458.012 19.657 438.477.099 414.445.087L262.508 0h-.02c-8.648 0-16.781 3.367-22.898 9.484L12.762 236.312C4.532 244.543 0 255.484 0 267.125s4.531 22.582 12.762 30.813L159.965 445.14c8.496 8.496 19.656 12.742 30.812 12.742 11.16 0 22.32-4.246 30.817-12.742l142.812-142.813c3.906-3.906 3.906-10.238 0-14.14-3.906-3.907-10.238-3.907-14.144 0L207.449 431c-9.191 9.191-24.148 9.191-33.34 0L26.906 283.797C22.453 279.344 20 273.422 20 267.125s2.453-12.219 6.906-16.672L253.73 23.63A12.304 12.304 0 01262.488 20h.008l151.938.086c13 .004 23.574 10.59 23.566 23.59l-.047 83.797H392.91c-3.879 0-7.39-1.586-9.93-4.141a36.678 36.678 0 0011.516-7.793c14.371-14.375 14.371-37.758 0-52.129-14.375-14.375-37.758-14.375-52.133 0-14.37 14.371-14.37 37.754 0 52.13a36.663 36.663 0 0018.785 10.054c4.895 12.777 17.282 21.879 31.762 21.879h45.031l-.027 47.937c0 3.309-1.289 6.414-3.629 8.75l-27.453 27.457c-3.906 3.906-3.906 10.238 0 14.145 3.902 3.902 10.234 3.902 14.14 0l27.458-27.457c6.11-6.114 9.48-14.239 9.484-22.883l.027-47.95H478c18.746 0 34-15.25 34-34 0-18.745-15.254-34-34-34zM356.508 77.55a16.806 16.806 0 0111.926-4.93 16.82 16.82 0 0111.921 4.93 16.903 16.903 0 012.61 3.41c-10.977 3.363-19.602 12.148-22.754 23.219a16.75 16.75 0 01-3.703-2.782c-6.574-6.578-6.574-17.273 0-23.847zM478 127.473h-20.047l.016-28H478c7.719 0 14 6.28 14 14s-6.281 14-14 14zm0 0" />
                    <path d="M161.414 252.305c1.23 4.425 5.25 7.32 9.625 7.32.89 0 1.793-.117 2.688-.367l102.656-28.574c5.32-1.48 8.433-6.996 6.953-12.317-1.48-5.316-6.992-8.43-12.316-6.949l-102.657 28.57c-5.316 1.485-8.43 6.996-6.949 12.317zm0 0M206.602 265.5c-5.57 5.57-8.637 12.973-8.637 20.852 0 7.875 3.066 15.277 8.637 20.847 5.75 5.746 13.296 8.621 20.847 8.621s15.102-2.875 20.852-8.62c11.496-11.497 11.496-30.204 0-41.7-11.496-11.496-30.203-11.496-41.7 0zm27.554 27.555c-3.699 3.699-9.715 3.699-13.414 0a9.41 9.41 0 01-2.777-6.707c0-2.532.988-4.914 2.777-6.707a9.471 9.471 0 016.707-2.774c2.43 0 4.86.926 6.707 2.774 3.7 3.699 3.7 9.718 0 13.414zm0 0M253.254 205.96c11.496-11.5 11.496-30.202 0-41.698-5.57-5.57-12.977-8.637-20.852-8.637s-15.28 3.066-20.847 8.637c-11.496 11.496-11.496 30.199 0 41.699 5.75 5.746 13.297 8.621 20.847 8.621 7.551 0 15.102-2.875 20.852-8.621zm-27.559-27.558a9.423 9.423 0 016.707-2.777 9.41 9.41 0 016.707 2.777c3.7 3.7 3.7 9.715 0 13.414-3.695 3.7-9.714 3.7-13.414 0-3.695-3.699-3.695-9.714 0-13.414zm0 0" />
                    <path d="M99.46 231.64c-3.905-3.906-10.237-3.906-14.144 0l-28.414 28.415a10 10 0 000 14.14l126.809 126.809c1.95 1.95 4.512 2.926 7.07 2.926s5.117-.977 7.07-2.926l189.594-189.598c3.907-3.906 3.907-10.238 0-14.144L260.641 70.457a10 10 0 00-14.141 0L141.887 175.07c-3.907 3.907-3.907 10.239 0 14.145 3.902 3.902 10.234 3.902 14.14 0l97.543-97.543 112.664 112.664-175.453 175.453L78.117 267.125l21.344-21.344c3.902-3.906 3.906-10.234 0-14.14zm0 0M385.621 256.973c-2.633 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.437 2.93 7.07 2.93c2.629 0 5.207-1.07 7.07-2.93 1.86-1.86 2.93-4.441 2.93-7.07s-1.07-5.211-2.93-7.07a10.087 10.087 0 00-7.07-2.93zm0 0" />
                    <path d="M127.738 217.492a10.013 10.013 0 002.934-7.07c0-2.629-1.063-5.2-2.934-7.07a10.057 10.057 0 00-7.066-2.93c-2.633 0-5.211 1.07-7.07 2.93a10.063 10.063 0 00-2.93 7.07c0 2.64 1.066 5.21 2.93 7.07a10.037 10.037 0 007.07 2.93c2.637 0 5.207-1.059 7.066-2.93zm0 0" />
                  </svg>
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
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512pt"
                  height="512pt"
                  viewBox="0 -27 512 512">
                    <path d="M478 79.473h-20.02l.02-35.79C458.012 19.657 438.477.099 414.445.087L262.508 0h-.02c-8.648 0-16.781 3.367-22.898 9.484L12.762 236.312C4.532 244.543 0 255.484 0 267.125s4.531 22.582 12.762 30.813L159.965 445.14c8.496 8.496 19.656 12.742 30.812 12.742 11.16 0 22.32-4.246 30.817-12.742l142.812-142.813c3.906-3.906 3.906-10.238 0-14.14-3.906-3.907-10.238-3.907-14.144 0L207.449 431c-9.191 9.191-24.148 9.191-33.34 0L26.906 283.797C22.453 279.344 20 273.422 20 267.125s2.453-12.219 6.906-16.672L253.73 23.63A12.304 12.304 0 01262.488 20h.008l151.938.086c13 .004 23.574 10.59 23.566 23.59l-.047 83.797H392.91c-3.879 0-7.39-1.586-9.93-4.141a36.678 36.678 0 0011.516-7.793c14.371-14.375 14.371-37.758 0-52.129-14.375-14.375-37.758-14.375-52.133 0-14.37 14.371-14.37 37.754 0 52.13a36.663 36.663 0 0018.785 10.054c4.895 12.777 17.282 21.879 31.762 21.879h45.031l-.027 47.937c0 3.309-1.289 6.414-3.629 8.75l-27.453 27.457c-3.906 3.906-3.906 10.238 0 14.145 3.902 3.902 10.234 3.902 14.14 0l27.458-27.457c6.11-6.114 9.48-14.239 9.484-22.883l.027-47.95H478c18.746 0 34-15.25 34-34 0-18.745-15.254-34-34-34zM356.508 77.55a16.806 16.806 0 0111.926-4.93 16.82 16.82 0 0111.921 4.93 16.903 16.903 0 012.61 3.41c-10.977 3.363-19.602 12.148-22.754 23.219a16.75 16.75 0 01-3.703-2.782c-6.574-6.578-6.574-17.273 0-23.847zM478 127.473h-20.047l.016-28H478c7.719 0 14 6.28 14 14s-6.281 14-14 14zm0 0" />
                    <path d="M161.414 252.305c1.23 4.425 5.25 7.32 9.625 7.32.89 0 1.793-.117 2.688-.367l102.656-28.574c5.32-1.48 8.433-6.996 6.953-12.317-1.48-5.316-6.992-8.43-12.316-6.949l-102.657 28.57c-5.316 1.485-8.43 6.996-6.949 12.317zm0 0M206.602 265.5c-5.57 5.57-8.637 12.973-8.637 20.852 0 7.875 3.066 15.277 8.637 20.847 5.75 5.746 13.296 8.621 20.847 8.621s15.102-2.875 20.852-8.62c11.496-11.497 11.496-30.204 0-41.7-11.496-11.496-30.203-11.496-41.7 0zm27.554 27.555c-3.699 3.699-9.715 3.699-13.414 0a9.41 9.41 0 01-2.777-6.707c0-2.532.988-4.914 2.777-6.707a9.471 9.471 0 016.707-2.774c2.43 0 4.86.926 6.707 2.774 3.7 3.699 3.7 9.718 0 13.414zm0 0M253.254 205.96c11.496-11.5 11.496-30.202 0-41.698-5.57-5.57-12.977-8.637-20.852-8.637s-15.28 3.066-20.847 8.637c-11.496 11.496-11.496 30.199 0 41.699 5.75 5.746 13.297 8.621 20.847 8.621 7.551 0 15.102-2.875 20.852-8.621zm-27.559-27.558a9.423 9.423 0 016.707-2.777 9.41 9.41 0 016.707 2.777c3.7 3.7 3.7 9.715 0 13.414-3.695 3.7-9.714 3.7-13.414 0-3.695-3.699-3.695-9.714 0-13.414zm0 0" />
                    <path d="M99.46 231.64c-3.905-3.906-10.237-3.906-14.144 0l-28.414 28.415a10 10 0 000 14.14l126.809 126.809c1.95 1.95 4.512 2.926 7.07 2.926s5.117-.977 7.07-2.926l189.594-189.598c3.907-3.906 3.907-10.238 0-14.144L260.641 70.457a10 10 0 00-14.141 0L141.887 175.07c-3.907 3.907-3.907 10.239 0 14.145 3.902 3.902 10.234 3.902 14.14 0l97.543-97.543 112.664 112.664-175.453 175.453L78.117 267.125l21.344-21.344c3.902-3.906 3.906-10.234 0-14.14zm0 0M385.621 256.973c-2.633 0-5.21 1.07-7.07 2.93s-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.437 2.93 7.07 2.93c2.629 0 5.207-1.07 7.07-2.93 1.86-1.86 2.93-4.441 2.93-7.07s-1.07-5.211-2.93-7.07a10.087 10.087 0 00-7.07-2.93zm0 0" />
                    <path d="M127.738 217.492a10.013 10.013 0 002.934-7.07c0-2.629-1.063-5.2-2.934-7.07a10.057 10.057 0 00-7.066-2.93c-2.633 0-5.211 1.07-7.07 2.93a10.063 10.063 0 00-2.93 7.07c0 2.64 1.066 5.21 2.93 7.07a10.037 10.037 0 007.07 2.93c2.637 0 5.207-1.059 7.066-2.93zm0 0" />
                  </svg>
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
const Card = styled(Link)``
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
    justify-content: center;
    margin-bottom: 0.8rem;
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