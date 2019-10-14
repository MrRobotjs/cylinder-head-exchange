/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import MobileHeader from "./mobile-header"
import "./layout.css"
import Footer from '../components/footer' 
import styled from 'styled-components'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, BackgroundColor }) => {

  return (
    <>
      <InfoBar>
        <Right>
          <Phone>90912345678</Phone>
        </Right>
      </InfoBar>
      <Header/>
      <MobileHeader />
      <main style={{backgroundColor: `${BackgroundColor}`}}>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Phone = styled.div``
const Right = styled.div``

const InfoBar = styled.div`
  background-color: #fff;
  display: flex;
  z-index: 5 ;
  position: relative;
  justify-content: flex-end;
  background-color: #f2f2f2;
  ${Right} {
    position: relative;
    ${Phone} {
      padding: 1rem;
    }
    &::before {
      content: "";
      transform: skew(-19deg, 0deg);
      background-color: #e5e5e5;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 2px;
      transition: background-color 250ms ease-in-out;
      z-index: -1;
    }
  }
  @media screen and (max-width: 798px) {
    display: none;
  }
`