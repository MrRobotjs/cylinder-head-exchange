import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Ripples from 'react-ripples'
import * as variable from 'src/config' 
import { darken } from 'polished'
import SideBar from "../components/sidebar"

const Header = ({ siteTitle }) => (
  <NavigatonBar>
    <LogoContainer
    to="/">
        <Logo>
          {siteTitle}
        </Logo>
    </LogoContainer>
    <Navmenu>
      <Navlink
      to="/"
      activeClassName="active">Home</Navlink>
      <Navlink
      to="/page-2"
      activeClassName="active">Page 2</Navlink>
      <Navlink
      to="/page-3"
      activeClassName="active">404</Navlink>
    </Navmenu>
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} right/>
    <Actionbtns>
      <Ripplescontainer
      color="rgba(255,255,255,0.7)">
        <Directionsbtn
        href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385"
        target="_blank">Get Directions</Directionsbtn>
      </Ripplescontainer>
    </Actionbtns>
  </NavigatonBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Ripplescontainer = styled(Ripples)`
`
const Directionsbtn = styled.a`
`
const Actionbtns = styled.div`
`
const Navlink = styled(Link)`
`
const Navmenu = styled.nav`
`
const LogoContainer = styled(Link)`
`
const Logo = styled.div`
`
const NavigatonBar = styled.header`
  background-color: #fff;
  margin-bottom: 1.45rem;
  display: flex;
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0;
  ${LogoContainer} {
    max-width: 960px;
    margin-right: 2rem;
    position: relative;
    text-decoration: none;
    padding: 0 1.0875rem;
    &::before {
      content: "";
      transform: skew(-19deg, 0deg);
      background-color: ${variable.SiteColor};
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 2px;
      transition: background-color 250ms ease-in-out;
    }
    &:hover {
      &::before {
        background-color: ${darken(0.2, variable.SiteColor)};
      }
    }
    ${Logo} {
      color: white;
      margin: unset;
      z-index: 1;
      position: relative;
      font-size: 1.4rem;
      line-height: 62px;
      font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
      white-space: nowrap;
    }
  }
  ${Navmenu} {
    display: flex;
    ${Navlink} {
      align-self: center;
      line-height: 60px;
      height: 100%;
      margin-right: 1.5rem;
      text-decoration: unset;
      color: #5f6368;
      font-size: 0.8rem;
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      transition: border-color ease-in-out 230ms;
      position: relative;
      z-index: 1;
      padding: 0px 10px;
      &::before {
        content: "";
        transform: skew(-19deg,0deg) translatex(-9.5px) translatey(-72px);
        background-color: #ff2b3c;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: background-color 250ms ease-in-out;
        z-index: -1;
      }
      &.active {
        font-weight: bold;
        color: #fff;
        &:hover {
          color: #fff;
          &::before {
            background-color: ${darken(0.17, variable.SiteColor)};
          }
        }
        &::before {
          animation-fill-mode: forwards;
          animation-name: transform;
          animation-duration: 230ms;
          animation-timing-function: ease-out;
        }
      }
      &:hover {
        color: #fff;
        font-weight: unset;
        color: ${variable.SiteColor};
        &.active {
          font-weight: bold;
        }
      }
    }
  }
  ${Actionbtns} {
    display: flex;
    margin-left: auto;
    margin-right: 0.5rem;
    ${Ripplescontainer} {
      align-self: center;
      ${Directionsbtn} {
        color: #fff;
        background-color: ${variable.SiteColor};
        text-decoration: unset;
        background-size: 135px 1px;  
        font-size: 0.85rem;
        padding: 8px 17px;
        font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
        transition: background-color 230ms ease-in-out;
        &:hover {
          background-color: ${darken(0.15, variable.SiteColor)};
        }
      }
    }
  }
  @media screen and (max-width: 960px) {
    ${Actionbtns} {
      display: none;
    }
  }
  @media screen and (max-width: 719px) {
    ${Navmenu} {
      display: none;
    }
    ${LogoContainer} {
      margin: 0 auto;
    }
  }
  @keyframes height {
    0% {
      height: 0%;
    }
    50% {
      height: 50%;
    }
    100% {
      height: 100%;
    }
  }
  @keyframes transform {
    from {
      transform: skew(-19deg,0deg) translatex(-9.5px) translatey(-72px);
    }
    to {
      transform: skew(-19deg,0deg) translatex(-9.5px) translatey(0);
    }
  }
  @media screen and (max-width: 357px) {
    background-color: ${variable.SiteColor};
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12);
  }
  @media screen and ${variable.iP5s} {
    ${LogoContainer} {
      ${Logo} {
        text-indent: 15px;
      }
    }
  }
`