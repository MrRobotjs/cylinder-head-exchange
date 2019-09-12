import { Link } from "gatsby"
import {darken} from 'polished'
import React from "react"
import styled from 'styled-components'
import * as variable from 'src/config' 

const Header = ({ Image, Titlee, SubTitlee, ExpirationDate }) => (
    <Card>
        <Url to="/offers">{title}</Url>
        <Top style={{backgroundImage: `url(${Image})`}}>
        </Top>
        <Bottom>
          <Title>{Titlee}</Title>
          <SubTitle>{SubTitlee}</SubTitle>
          <OfferDetails>
            <OfferBtn to="page-2">Details</OfferBtn>
            <Expiration>Exp. {ExpirationDate}</Expiration>
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
    flex-basis: 20rem;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    border: solid 1px #dcdcdb;
    position: relative;
    flex-direction: column;
    display: flex;
    background-color: #fafafa;
    border-radius: 2px;
    overflow: hidden;
    ${Url} {
      width: 100%;
      font-size: 0;
      color: transparent;
      visibility: hidden;
      height: 100%;
      z-index: 1;
      position: absolute;
    }
    a:hover {
      ~ ${Top} {
        transform: scale(1.05);
      }
    }
    ${Top} {
      background-color: red;
      width: 100%;;
      height: 10rem;;
      position: relative;
      background-position: center;
      background-size: cover;
      transition: 280ms linear all;
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
          transition: all linear 280ms;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        &:hover {
          background-color: ${darken( 0.2, variable.SiteColor)}
        }
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
    @media screen and (max-width: 729px) {
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