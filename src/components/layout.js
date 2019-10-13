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
        <Phone>90912345678</Phone>
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

const InfoBar = styled.div`
  padding: 1rem;
  background-color: #fff;
  display: flex;
  z-index: 5 ;
  position: relative;
  justify-content: flex-end;
  ${Phone} {

  }
  @media screen and (max-width: 798px) {
    display: none;
  }
`