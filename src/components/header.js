import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Ripples from 'react-ripples'
import * as variable from 'src/config' 
import { darken } from 'polished'

const Header = ({ siteTitle }) => (
  <NavigatonBar>
    <LogoContainer>
      <h1>
        <Logo
        to="/">
          {siteTitle}
        </Logo>
      </h1>
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
      activeClassName="active">Page 3</Navlink>
    </Navmenu>
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
const LogoContainer = styled.div`
`
const Logo = styled(Link)`
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
    }
    h1 {
      margin: unset;
      z-index: 1;
      position: relative;
      font-size: 1.4rem;
      line-height: 62px;
      ${Logo} {
        color: white;
        text-decoration: none;
      }
    }
  }
  ${Navmenu} {
    display: flex;
    ${Navlink} {
      align-self: center;
      line-height: 60px;
      height: 100%;
      margin-right: 1.5rem;
      border-bottom: 2px solid transparent;
      text-decoration: unset;
      color: #5f6368;
      font-size: 0.8rem;
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      transition: border-color ease-in-out 230ms;
      &:hover,
      &.active {
        border-color: ${variable.SiteColor};
        color: ${variable.SiteColor};
        font-weight: bold;
      }
      &:hover {
        font-weight: unset;
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
        font-size: 0.85rem;
        padding: 8px 17px;
        font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
        transition: background-color 230ms ease-in-out;
        &:hover {
          background-color: ${darken(0.15, variable.SiteColor)}
        }
      }
    }
  }
  @media screen and ${variable.BelowMidPoint} {
    ${Actionbtns},
    ${Navmenu} {
      display: none;
    }
    ${LogoContainer} {
      margin: 0 auto;
    }
  }
`