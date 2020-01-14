import React from "react"
import styled from 'styled-components'
import Helmet from "../components/helmet"
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
//import Pricing from '../components/index/pricing'
import Services from '../components/index/services'

/*#f3f3f3*/

export default ({ data }) => (
  <>
    <Helmet />

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
      <Tabd
      href="#testimonials">
        Testimonials
      </Tabd>
    </Navigation>

    <Services />
    
    {
      /*
      <OfferSection AllOffers={data.All}/>
      */
    }

{
  /*
    <EmailContainer id="email">
      <Text>Sign up for exclusive offers now!</Text>
      <Input disabled placeholder="Enter your email here" title="Disabled. Still a work in progress."></Input>
      <a href="/">Privacy Statement</a>
    </EmailContainer>
    */
}
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
const Tabd = styled.a``
const Text = styled.p``
const Input = styled.input``

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