import React from "react"
import { Link } from "gatsby"
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
    <DirectionsHours/>
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
const Tabd = styled.a``
const Text = styled.p``
const Input = styled.input``

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