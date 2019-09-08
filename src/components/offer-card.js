import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Ripples from 'react-ripples'
import * as variable from 'src/config' 

const Header = ({ Image, Titlee }) => (
    <Card>
        <Url to="/page-2"></Url>
        <Top style={{backgroundImage: `url(${Image})`}}>
        </Top>
        <Bottom>
          <Title>{Titlee}</Title>
          <SubTitle>Includes Oil Filter</SubTitle>
          <OfferDetails>
            <OfferBtn>Details</OfferBtn>
            <Expiration>Exp. 00/00/2019</Expiration>
          </OfferDetails>
        </Bottom>
    </Card>
)

export default Header

const Title = styled.div``
const Url = styled(Link)``
const Top = styled.div``
const Bottom = styled.div``
const SubTitle = styled.div``
const OfferDetails = styled.div``
const OfferBtn = styled(Link)``
const Expiration = styled.p``

const Card = styled.div`
    flex-basis: 18rem;
    border: 1px solid #eee;
    display: flex;
    margin-right: 0.8rem;
    margin-left: 0.8rem;
    margin-bottom: 1rem;
    border: 2px #000 dashed;
    position: relative;
    flex-direction: column;
    ${Url} {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
    }
    ${Top} {
      background-color: red;
      width: 100%;;
      height: 10rem;;
      position: relative;
      background-position: center;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
    ${Bottom} {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      ${Title} {
        text-align: center;
        font-weight: bold;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 1rem 0;
        margin-top: 0.3rem;
      }
      ${SubTitle} {
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        color: ${variable.SiteColor};
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: auto 0;
        margin-top: unset;
      }
      ${OfferDetails} {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
        justify-content: space-evenly;
        ${OfferBtn} {
          align-self: center;
          color: #fff;
          background-color: ${variable.SiteColor};
          padding: 0.5rem 1rem;
          text-decoration: unset;
          line-height: 100%;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          z-index: 1;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        ${Expiration} {
          align-self: center;
          margin: unset;
          font-size: 0.7rem;
          font-weight: 700;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        }
      }
    }
    @media screen and (max-width: 644px) {
      flex-basis: 24rem;
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
`