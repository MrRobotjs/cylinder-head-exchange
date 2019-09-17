import { Link } from "gatsby"
import {darken} from 'polished'
import React from "react"
import styled from 'styled-components'
import * as variable from 'src/config' 
const _ = require("lodash")

const Header = ({ Image, Titlee, SubTitlee, ExpirationDate, Id, offerTitle }) => (
    <Card>
        <Url to={"/offers/offer/" + _.kebabCase(offerTitle) + "-" + Id}>{Titlee}</Url>
        <Top style={{backgroundImage: `url(${Image})`}}>
        </Top>
        <Bottom>
          <Title>{Titlee}</Title>
          <SubTitle>{SubTitlee}</SubTitle>
          <OfferDetails>
            <OfferBtn to={"/offers/offer/" + _.kebabCase(offerTitle) + "-" + Id}>Claim Offer</OfferBtn>
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
    background-color: #fff;
    border-radius: 2px;
    overflow: hidden;
    transition: all 280ms linear;
    &:hover,
    &:active,
    &:focus {
      box-shadow: 2px 2px 15px 0 rgba(60,60,60,.2);
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }
    &:active,
    &:focus {
      background-color: #fff;
    }
    &:focus {
      outline: unset;
      border: 2px solid ${variable.SiteColor};
    }
    ${Url} {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
      font-size: 0;
      color: transparent;
      visibility: hidden;
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
        margin: 1rem 0;
        margin-top: 0.3rem;
      }
      ${SubTitle} {
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        color: ${variable.SiteColor};
        text-transform: uppercase;
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
        &:hover {
          background-color: ${darken( 0.2, variable.SiteColor)}
        }
        }
        ${Expiration} {
          align-self: center;
          margin: unset;
          font-size: 0.7rem;
          font-weight: 700;
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