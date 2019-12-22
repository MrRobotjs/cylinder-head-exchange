/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import MobileHeader from "../components/mobile-header"
import "../components/layout.css"
import Footer from '../components/footer' 
import Announcement from '../components/headerbar'
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, BackgroundColor }) => {

  return (
    <>
      <Announcement />
      <Header/>
      <MobileHeader />
      <main style={{backgroundColor: `${BackgroundColor}`, minHeight: `70vh`}}>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout