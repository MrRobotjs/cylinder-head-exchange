import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Ripples from 'react-ripples'
import * as variable from 'src/config' 

const Header = ({ Image, Titlee }) => (
    <Card>
        <Url to="/page-2"></Url>
        <Left style={{backgroundImage: `url(${Image})`}}>
        </Left>
        <Right>
        <Title>{Titlee}</Title>
        <SubTitle>Includes Oil Filter</SubTitle>
        <OfferDetails>
          <OfferBtn>Details</OfferBtn>
          <Expiration>Exp. 00/00/2019</Expiration>
        </OfferDetails>
        </Right>
    </Card>
)

export default Header

const Title = styled.div``
const Url = styled(Link)``
const Left = styled.div``
const Right = styled.div``
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
    height: 17rem;
    border: 2px #000 dashed;
    position: relative;
    ${Url} {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
    }
    ${Left} {
      background-color: red;
      width: 12rem;
      height: 100%;
      position: relative;
      background-position: center;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
    ${Right} {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      ${Title} {
        text-align: center;
        font-weight: bold;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
      }
      ${OfferDetails} {
        display: flex;
        flex-direction: column;
        margin-top: auto;
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
    @media screen and (max-width: 719px) {
      word-break: break-all;
    }
    @media screen and (max-width: 644px) {
      flex-basis: 24rem;
    }
    @media screen and (max-width: 450px) {
      flex-basis: 21rem;
    }
    @media screen and (max-width: 380px) {
      flex-basis: 16rem;
      flex-direction: column;
      height: unset;
      ${Left} {
        width: 100%;
        background-size: contain;
        height: 9rem;
      }
    }
`