import React from "react"
import styled from 'styled-components'
import HELMET from "../components/helmet"
import * as variable from 'src/config.js'
import "react-tabs/style/react-tabs.css";
import {rgba, darken, lighten} from 'polished'
import MechanicalPart from '../images/background.jpg'
import { graphql } from "gatsby"
//import OfferSection from '../components/index/offers.js'
import Hero from '../components/index/hero.js'
import DirectionsHours from '../components/index/directions-hours'
import WhyUs from '../components/index/why-us'
import { Link } from "gatsby"
import Testimonials from '../components/index/testimonials.js'

/*#f3f3f3*/
export default ({ data }) => (
  <>
    <HELMET title="Home" description="Description coming from Index" />

    <Hero/>

    <Navigation>
      <Tabd
      href="#services">
        Services
      </Tabd>
      <Tabd
      href="#email">
        Email Subscription
      </Tabd>
      <Tabd
      href="#map">
        Map / Info
      </Tabd>
    </Navigation>
    
    {
      /*
      <OfferSection AllOffers={data.All}/>
      */
    }
    
    <Content id="services">
        <ServicesHeader>Services</ServicesHeader>
        <ServicesDescription>One of our many services. Coming Soon...</ServicesDescription>
        <Container>

          <Card type="Engine">
            <Url to={"/"}>Engine Service</Url>
            <Top>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 511.996 511.996">
                  <path d="M501.085 137.464L411.44 47.819c-13.045-13.047-33.294-14.569-48.145-3.619l-48.426 35.706a7.499 7.499 0 00-.852 11.337l11.67 11.67-51.269 51.269h-36.843l-51.272-51.272 11.672-11.673a7.5 7.5 0 00-.853-11.337l-48.424-35.698c-14.845-10.953-35.093-9.431-48.144 3.621L86.359 62.019a7.499 7.499 0 0010.604 10.604l14.196-14.196c7.765-7.765 19.807-8.672 28.639-2.156l16.112 11.878L31.236 192.822l-11.878-16.107c-6.511-8.843-5.605-20.893 2.154-28.652l54.246-54.245a7.499 7.499 0 00-10.604-10.604l-54.246 54.245C-2.133 150.5-3.658 170.749 7.286 185.61l35.711 48.427a7.499 7.499 0 0011.337.852l11.671-11.672 8.707 8.707c-18.396 15.837-29.159 38.954-29.159 63.437 0 40.203 28.693 74.534 67.62 82.138 4.233 22.432 20.21 40.76 41.285 48.32v26.933c0 12.317 10.016 22.337 22.328 22.337 9.687 0 17.951-6.2 21.039-14.839h10.735c3.087 8.639 11.346 14.839 21.029 14.839 9.687 0 17.951-6.2 21.039-14.839h10.738c3.087 8.637 11.349 14.836 21.034 14.836s17.946-6.199 21.033-14.836h10.739c3.087 8.637 11.349 14.836 21.033 14.836 12.314 0 22.332-10.018 22.332-22.332v-58.948c11.76-1.624 22.33-7.006 30.462-14.897a83.286 83.286 0 0041.83-14.374 7.498 7.498 0 001.963-10.421 7.497 7.497 0 00-10.42-1.963 68.364 68.364 0 01-21.477 9.743 54.111 54.111 0 004.487-17.417 53.553 53.553 0 0032.042-49.115c0-16.646-7.645-32.054-20.444-42.136l10.664-10.664c15.631 13.012 24.8 32.325 24.8 52.798 0 13.402-3.879 26.395-11.217 37.575a7.499 7.499 0 0012.537 8.229c8.947-13.631 13.676-29.47 13.676-45.803 0-24.488-10.764-47.603-29.161-63.432l8.712-8.712 11.671 11.671a7.499 7.499 0 0011.336-.852l35.706-48.425c10.95-14.853 9.428-35.101-3.619-48.147zm-120.89 69.254c0-1.882.733-3.652 2.064-4.983l21.126-21.126 9.965 9.965-21.126 21.126a7 7 0 01-4.982 2.064 7.001 7.001 0 01-4.983-2.064 6.997 6.997 0 01-2.064-4.982zm-18.562-67.86l6.662 6.662-21.126 21.126a7 7 0 01-4.983 2.064 7.003 7.003 0 01-4.983-2.064c-2.747-2.747-2.747-7.218 0-9.965l21.126-21.126zm-25.341-25.341l11.434 11.434-21.126 21.126c-8.594 8.594-8.594 22.578 0 31.172a21.9 21.9 0 0015.586 6.456 21.897 21.897 0 0015.586-6.456l21.126-21.126 13.883 13.883-21.126 21.126a21.9 21.9 0 00-6.456 15.586c0 5.887 2.293 11.423 6.456 15.586s9.698 6.456 15.586 6.456 11.423-2.293 15.586-6.456l21.126-21.126 11.434 11.434-48.163 48.164-99.096-99.095zm-31.561 280.821h8.142v50.916h-8.142zm-51.469-14.996l42.266-41.493c-.022.64-.049 1.28-.049 1.925 0 15.566 6.563 29.619 17.054 39.568zm-54.139 45.865a63.58 63.58 0 008.139-3.853v23.9h-8.139zm52.804-30.869h8.141v50.916h-8.141zm-12.303-22.622c.191-2.007.298-4.038.298-6.094 0-35.254-28.682-63.936-63.936-63.936-1.381 0-2.748.059-4.108.146l41.803-40.877c1.564 21.986 19.939 39.4 42.316 39.4 23.4 0 42.437-19.037 42.437-42.437 0-1.002-.047-1.992-.116-2.976l43.006 30.977c-11.548 1.862-21.897 7.353-29.825 15.273l.009-.046zM106.717 263.93l11.477 11.477 14.058 43.64a64.375 64.375 0 00-11.305 14.093c-17.376-3.858-30.387-19.601-30.387-37.778.001-12.592 6.077-24.208 16.157-31.432zm149.28-33.453c15.131 0 27.441 12.31 27.441 27.441s-12.31 27.441-27.441 27.441-27.441-12.31-27.441-27.441 12.31-27.441 27.441-27.441zm117.171 59.898s-90.646-65.586-91.702-66.381a42.218 42.218 0 00-25.469-8.513c-11.042 0-21.11 4.243-28.667 11.179l-82.96 81.096-11.055-34.317 104.261-104.261h36.843l104.26 104.26-5.46 16.959-.051-.022zM108.61 180.61l21.126 21.126a7 7 0 012.064 4.982 6.997 6.997 0 01-2.064 4.982 7 7 0 01-4.983 2.064 7 7 0 01-4.982-2.064l-21.126-21.126zm-58.717 37.512l-9.656-13.094 127.88-127.88 13.091 9.65zm38.149-16.943l21.125 21.125c4.163 4.163 9.698 6.456 15.586 6.456s11.423-2.293 15.586-6.456 6.456-9.699 6.456-15.586-2.293-11.423-6.456-15.586l-21.126-21.126.174-.174 13.709-13.709 21.126 21.126c4.163 4.163 9.698 6.456 15.586 6.456s11.423-2.293 15.586-6.456c8.594-8.594 8.594-22.578 0-31.172l-21.126-21.126 11.434-11.434 48.164 48.164-99.096 99.095-48.162-48.162zm65.623-65.624l21.126 21.126c2.747 2.747 2.747 7.218 0 9.965-1.331 1.331-3.101 2.064-4.983 2.064s-3.652-.733-4.983-2.064L143.7 145.52zM60.549 295.361c0-20.468 9.168-39.783 24.797-52.803l10.666 10.666c-12.801 10.083-20.448 25.491-20.448 42.137 0 13.459 5.023 26.342 14.144 36.276 6.844 7.454 15.535 12.756 25.095 15.43a63.531 63.531 0 00-2.639 14.845c-29.955-7.682-51.615-34.9-51.615-66.551zm66.497 70.261c0-26.985 21.955-48.94 48.94-48.94s48.94 21.954 48.94 48.94-21.955 48.94-48.94 48.94-48.94-21.954-48.94-48.94zm49.74 94.471c-4.042 0-7.332-3.293-7.332-7.341v-23.525c2.148.219 4.326.331 6.531.331 2.76 0 5.473-.195 8.142-.536v23.73c0 4.048-3.293 7.341-7.341 7.341zm52.803 0c-4.042 0-7.331-3.293-7.331-7.341v-42.973l14.673-14.405v57.377c0 4.049-3.293 7.342-7.342 7.342zm52.811-.003c-4.045 0-7.336-3.291-7.336-7.336v-58.416h14.671v58.416c0 4.045-3.29 7.336-7.335 7.336zm52.805 0c-4.045 0-7.335-3.291-7.335-7.336v-58.416h14.671v58.416c0 4.045-3.291 7.336-7.336 7.336zm14.834-80.752c-21.815 0-39.564-17.748-39.564-39.564 0-21.815 17.748-39.564 39.564-39.564 21.815 0 39.564 17.748 39.564 39.564s-17.749 39.564-39.564 39.564zm71.389-83.976a38.593 38.593 0 01-18.097 32.754c-2.508-11.473-8.633-21.605-17.121-29.138l7.588-23.569 11.477-11.477c10.078 7.221 16.153 18.837 16.153 31.43zm40.673-77.243L330.785 86.803l13.093-9.654 127.877 127.877zm30.533-41.41l-11.879 16.11L356.084 68.148l16.11-11.879c8.836-6.515 20.881-5.609 28.642 2.153l89.645 89.645c7.762 7.762 8.667 19.808 2.153 28.642z"></path>
                  <path d="M198.617 365.622c0-12.479-10.152-22.631-22.631-22.631s-22.631 10.152-22.631 22.631 10.152 22.631 22.631 22.631 22.631-10.152 22.631-22.631zm-30.266 0c0-4.21 3.425-7.635 7.635-7.635s7.635 3.425 7.635 7.635-3.425 7.635-7.635 7.635-7.635-3.425-7.635-7.635zM350.039 317.143c-12.479 0-22.631 10.152-22.631 22.631s10.152 22.631 22.631 22.631 22.631-10.152 22.631-22.631-10.152-22.631-22.631-22.631zm0 30.266c-4.21 0-7.635-3.425-7.635-7.635s3.425-7.635 7.635-7.635 7.635 3.425 7.635 7.635-3.425 7.635-7.635 7.635z"></path>
                </svg>
              </Icon>
            </Top>
            <Bottom>
              <Title>Engine Service</Title>
              <Desc>Coming Soon...</Desc>
            </Bottom>
          </Card>

          <Card type="Cylinder">
            <Url to={"/"}>Cylinder Head Service</Url>
            <Top>
                <Icon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0"
                    y="0"
                    enableBackground="new 0 0 512 512"
                    version="1.1"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve">
                    <path d="M490.042 384.371c-45.824-45.824-42.819-42.921-44.109-43.873l-121.297-89.556 47.055-47.051c37.832 13.481 80.665 4.161 109.492-24.666 31.406-31.406 39.65-79.421 20.514-119.478-4.46-9.333-16.829-11.447-24.134-4.14l-38.791 38.791c-5.846 5.846-15.357 5.847-21.207 0-5.861-5.861-5.861-15.345 0-21.206L456.357 34.4c7.314-7.313 5.187-19.679-4.14-24.133C412.16-8.869 364.146-.625 332.739 30.78c-28.834 28.834-38.143 71.669-24.666 109.491l-54.268 54.263c-11.049-8.594 3.531 6.085-100.534-104.261l10.909-10.909c6.9-6.899 5.462-18.451-2.888-23.461L80.978 7.714a53.327 53.327 0 00-65.241 8.031 53.329 53.329 0 00-8.031 65.241l48.189 80.315c5.018 8.366 16.575 9.774 23.461 2.888l10.288-10.288c103.526 109.775 89.9 94.864 98.084 105.387.194.249.41.469.616.703l-48.121 48.117c-37.82-13.477-80.658-4.168-109.49 24.666-31.406 31.406-39.65 79.42-20.513 119.478 4.461 9.334 16.827 11.446 24.134 4.14L73.145 417.6c5.849-5.847 15.36-5.845 21.207 0 5.861 5.861 5.861 15.345 0 21.206l-38.793 38.792c-7.314 7.313-5.186 19.679 4.14 24.134a104.583 104.583 0 0045.134 10.219c27.29-.001 54.226-10.615 74.344-30.732 28.834-28.834 38.143-71.669 24.666-109.492l41.096-41.093 95.684 116.28c.728.882-1.674-1.576 41.121 41.219 15.579 15.579 36.291 23.655 56.658 23.655 14.944 0 29.703-4.352 42.1-13.279 37.831-27.247 42.291-81.39 9.54-114.138zM100.869 122.092c-5.813-6.163-15.558-6.271-21.513-.315l-7.627 7.626-38.307-63.847a23.382 23.382 0 013.521-28.605 23.38 23.38 0 0128.604-3.521l63.847 38.308-7.627 7.625c-5.735 5.735-5.871 14.991-.306 20.891 119.572 126.789 100.763 107.71 110.971 115.65l-22.757 22.755c-7.865-10.114 10.397 9.831-108.806-116.567zM175.556 357.6a14.994 14.994 0 00-2.927 17.067c13.669 28.612 7.777 62.909-14.658 85.344-14.374 14.374-33.614 21.958-53.112 21.956-3.507 0-7.021-.245-10.518-.741l21.216-21.216c17.581-17.58 17.584-46.037 0-63.619-17.539-17.54-46.08-17.539-63.619 0l-21.216 21.216c-3.248-22.935 4.258-46.67 21.216-63.628 22.436-22.437 56.732-28.326 85.344-14.659a14.995 14.995 0 0017.067-2.927l182.01-181.997a14.996 14.996 0 002.928-17.067c-13.669-28.611-7.777-62.909 14.658-85.344 16.961-16.96 40.694-24.465 63.628-21.216l-21.216 21.216c-8.497 8.496-13.177 19.794-13.177 31.81s4.68 23.312 13.177 31.81c17.539 17.54 46.08 17.539 63.619 0l21.216-21.216c3.248 22.935-4.258 46.67-21.216 63.628-22.436 22.436-56.733 28.327-85.345 14.659a14.995 14.995 0 00-17.066 2.927L175.556 357.6zm90.626-48.208l37.009-37.006 37.719 27.848-45.065 45.065c-30.64-37.234-28.728-34.99-29.663-35.907zm196.792 164.782c-17.49 12.596-43.296 9.483-60.026-7.247l-39.631-39.63-48.328-58.731 50.318-50.318 61.91 45.709 41.618 41.619c19.023 19.023 17.801 51.556-5.861 68.598z"></path>
                    <path d="M447.371 424.2l-59.981-59.981c-5.855-5.856-15.35-5.856-21.206 0s-5.856 15.35 0 21.206l59.981 59.981c5.855 5.855 15.35 5.856 21.206 0s5.856-15.35 0-21.206z"></path>
                  </svg>
                </Icon>
            </Top>
            <Bottom>
              <Title>Cylinder Head Service</Title>
              <Desc>Coming Soon...</Desc>
            </Bottom>
          </Card>

          <Card type="Leak">
            <Url to={"/"}>Leak Checks</Url>
            <Top>
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 294.465 294.465"
                  version="1.1"
                  viewBox="0 0 294.465 294.465"
                  xmlSpace="preserve">
                  <path d="M174.432 32.465c-6.8-10-12.8-19.2-18.4-27.6-.8-1.2-2-2.4-3.2-3.2-4.8-3.2-11.2-1.6-14.4 3.2-5.2 8.4-11.2 17.2-18.4 27.6-31.6 46.4-78.8 116.4-78.8 156.4 0 29.2 12 55.6 31.2 74.8 19.2 18.8 45.6 30.8 74.8 30.8s55.6-12 74.8-31.2c19.2-19.2 31.2-45.6 31.2-74.8 0-40-47.2-109.6-78.8-156zm33.2 216.4c-15.6 15.6-36.8 24.8-60.4 24.8s-44.8-9.6-60.4-24.8c-15.6-15.6-24.8-36.8-24.8-60.4 0-33.6 45.2-100.4 75.2-144.8 3.6-5.2 6.8-10.4 10-14.8 3.2 4.4 6.4 9.6 10 14.8 30 44.8 75.2 111.2 75.2 144.8 0 23.6-9.6 44.8-24.8 60.4z"></path>
                  <path d="M209.232 181.265c-5.6-.4-10.4 4-10.8 9.6-.4 8.8-3.2 17.2-7.6 24.4-4.4 7.2-10.8 13.6-18.4 17.6-4.8 2.8-6.8 9.2-4 14 3.2 5.6 9.6 7.2 14.4 4.4 10.8-6 19.6-14.8 25.6-24.8 6.4-10 10-22 10.4-34.4.4-5.6-4-10.4-9.6-10.8z"></path>
                </svg>
              </Icon>
            </Top>
            <Bottom>
              <Title>Leak Checks</Title>
              <Desc>Coming Soon...</Desc>
            </Bottom>
          </Card>
        </Container>
    </Content>

    <EmailContainer id="email">
      <Text>Sign up for exclusive offers now!</Text>
      <Input disabled placeholder="Enter your email here" title="Disabled. Still a work in progress."></Input>
      <a href="/">Privacy Statement</a>
    </EmailContainer>

    <WhyUs />

    <DirectionsHours
    WebsiteName={data.Site.websiteName}
    ShopAddress={data.Site.shopInformation.address}
    MonSat={data.Site.shopInformation.shopHours.mondaySaturday}
    Sun={data.Site.shopInformation.shopHours.sunday}/>

    <Testimonials />

  </>
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
const Desc = styled.p``
const ServicesDescription = styled.div``

const Content = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
background-color: ${rgba(variable.SiteColor, 0.04)};
  ${ServicesHeader} {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin 0 2rem;
    margin-bottom: 0.6rem;
  }
  ${ServicesDescription} {
    color: #585858;
    text-align: center;
    margin 0 2rem;
    margin-bottom: 2.6rem;
  }
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 1rem;
    justify-content: center;
    ${Card} {
      background-color: #fff;
      box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.08);
      flex-basis: 15.3rem;
      margin: 0 1rem;
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
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      ${Top} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem 2.5rem;
        padding-bottom: 0;
        ${Icon} {
          border-radius: 50%;
          height: 65px;
          width: 65px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          pointer-events: none;
          svg {
            height: 60%;
            width: 60%;
            align-self: center;
            fill: #fff;
          }
        }
      }
      ${Bottom} {
        padding: 3rem 3rem;
        padding-top: 0;
        flex-grow: 1;
        ${Title} {
          font-weight: bold;
          margin: 19px 0;
          font-size: 1.2rem;
          color: #000;
        }
        ${Desc} {
          color: #000;
          font-size: 0.8rem;
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
        box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
        ${Url} {
          visibility: visible;
        }
        ${Top} {
          ${IconContainer} {
            transform: translateY(-4px);
          }
        }
      }
      &[type="Engine"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#00c99d", 0.15)};
            svg {
              fill: #00c99d;
            }
          }
        }
      }
      &[type="Cylinder"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#3975c3", 0.15)};
            svg {
              fill: #3975c3;
              height: 42%;
              width: 42%;
            }
          }
        }
      }
      &[type="Leak"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#5d57a9", 0.15)};
            svg {
              fill: #5d57a9;
              height: 45%;
              width: 45%;
            }
          }
        }
      }
      &:hover,
      &:active,
      &:focus {
        background-color: ${lighten(0.2, variable.SiteColor)};
        background-color: ${variable.SiteColor};
        ${Top} {
          ${Icon} {
            background-color: #fff;
          }
        }
        ${Bottom} {
          ${Title} {
            color: #fff;
          }
          ${Desc} {
            color: #fff;
          }
        }
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
      }/*
      @media screen and (max-width: 450px) {
        flex-basis: 21rem;
      }
      @media screen and (max-width: 380px) {
        flex-basis: 18rem;
      }
      @media screen and (max-width: 310px) {
        flex-basis: 16rem;
      }*/
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
padding: 2rem 0;
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
  font-size: 1.8rem;
  margin: 1.5rem;
  margin-top: unset;
  z-index: 1;
  text-transform: uppercase;
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
  margin: 1.5rem;
  margin-bottom: unset;
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
    svg {
      height: 26px;
      width: 26px;
      fill: #fff;
    }
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