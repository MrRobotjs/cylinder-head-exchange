import { Link } from "gatsby"
import {rgba} from 'polished'
import React from "react"
import styled from 'styled-components'
import Avatar from 'src/images/user.svg'

const OfferCard = ({ id, name, review, url }) => (
    <Card key={id} href={url} target="_blank">
        <Top>
            <IconContainer>
                <Icon>
                
                </Icon>
            </IconContainer>
            <Title>{name}</Title>
        </Top>
        <Bottom>
            <Desc>{review.substring(0,110)}{review.length > 110 && "..."}</Desc>
        </Bottom>
    </Card>
)

export default OfferCard

const Top = styled.div``
const Bottom = styled.div``
const Icon = styled.div``
const IconContainer = styled.div``
const Title = styled.p``
const Url = styled(Link)``
const Claim = styled(Link)``
const Desc = styled.div``

const Card = styled.a`
    background-color: #fff;
    box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
    flex-basis: 15.3rem;
    border-radius: 0.4rem;
    margin: 0 1rem;
    margin-bottom: 6rem;
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
      order: 2;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: -77px;
      position: absolute;
      ${Title} {
          text-align: center;
          font-weight: bold;
          margin: unset;
          font-size: 1.2rem;
          color: #000;
      }
      ${IconContainer} {
        align-self: center;
        border-radius: 50%;
        height: 85px;
        width: 85px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all linear 260ms;
        margin-bottom: 5px;
        ${Icon} {
          align-self: center;
          border-radius: 50%;
          height: 65px;
          width: 65px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
          background-color: #fff;
          background-image: url(${Avatar});
          background-position: center;
          background-repeat: none;
          background-size: cover;
        }
      }
    }
    ${Bottom} {
      padding: 2rem;
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      order: 1;
      padding-bottom: 4rem;
      ${Title} {
        text-align: center;
        font-weight: bold;
        margin: unset;
        font-size: 1.2rem;
        color: #000;
      }
      ${Desc} {
        color: #575757;
        line-height: 1.7;
        position: relative;
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
      ${Desc} {
        &::before, &::after {
          opacity: 0.35;
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
    /*@media screen and (max-width: 450px) {
      flex-basis: 21rem;
    }
    @media screen and (max-width: 380px) {
      flex-basis: 18rem;
    }
    @media screen and (max-width: 310px) {
      flex-basis: 16rem;
    }*/
  }
`