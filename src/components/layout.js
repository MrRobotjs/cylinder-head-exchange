/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import MobileHeader from "./mobile-header"
import "./layout.css"
import Footer from '../components/footer' 

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      contentfulWebsiteInformation {
        websiteName
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.contentfulWebsiteInformation.websiteName} />
      <MobileHeader />
        <main>{children}</main>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
