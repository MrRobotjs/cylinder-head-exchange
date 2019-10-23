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
import styled from 'styled-components'
import * as variable from 'src/config.js'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, BackgroundColor }) => {

  return (
    <>
      <InfoBar>
        <Ad>Get <b>10% OFF</b> your first Cylinder Head service!</Ad>
        <Right>
          <Phone href="tel:909-282-5198" target="blank">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="348.077"
            height="348.077"
            x="0"
            y="0"
            enableBackground="new 0 0 348.077 348.077"
            version="1.1"
            viewBox="0 0 348.077 348.077"
            xmlSpace="preserve"
          >
            <path d="M340.273 275.083l-53.755-53.761c-10.707-10.664-28.438-10.34-39.518.744l-27.082 27.076a792.327 792.327 0 01-5.344-2.973c-17.102-9.476-40.509-22.464-65.14-47.113-24.704-24.701-37.704-48.144-47.209-65.257-1.003-1.813-1.964-3.561-2.913-5.221l18.176-18.149 8.936-8.947c11.097-11.1 11.403-28.826.721-39.521L73.39 8.194c-10.682-10.68-28.421-10.356-39.518.744l-15.15 15.237.414.411c-5.08 6.482-9.325 13.958-12.484 22.02C3.74 54.28 1.927 61.603 1.098 68.941-6 127.785 20.89 181.564 93.866 254.541c100.875 100.868 182.167 93.248 185.674 92.876 7.638-.913 14.958-2.738 22.397-5.627 7.992-3.122 15.463-7.361 21.941-12.43l.331.294 15.348-15.029c11.074-11.098 11.393-28.83.716-39.542z"></path>
          </svg>
          90912345678
          </Phone>
        </Right>
      </InfoBar>
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

const Phone = styled.a``
const Right = styled.div``
const Ad = styled.div``

const InfoBar = styled.div`
  background-color: #fff;
  display: flex;
  z-index: 5;
  position: relative;
  justify-content: space-between;
  background-color: #f2f2f2;
  ${Ad} {
    align-self: center;
    padding-left: 1rem;
    word-break: keep-all;
    font-size: 1.4rem;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 87%;
    overflow-y: hidden;
    B {
      font-size: 1.9rem;
      font-weight: 900;
      color: ${variable.SiteColor};
    }
  }
  ${Right} {
    position: relative;
    ${Phone} {
      padding: 1rem;
      display: flex;
      align-items: center;
      text-decoration: unset;
      color: #000;
      font-weight: bold;
      &:hover {
        color: ${variable.SiteColor};
        svg {
          fill: ${variable.SiteColor};
        }
      }
      svg {
        height: 16px;
        width: 16px;
        fill: #000;
        margin-right: 5px;
      }
    }
    &::before {
      content: "";
      transform: skew(-19deg, 0deg);
      background-color: #e5e5e5;
      display: block;
      width: 110%;
      height: 100%;
      position: absolute;
      left: 2px;
      transition: background-color 250ms ease-in-out;
      z-index: -1;
    }
  }
  @media screen and (max-width: 798px) {
    ${Ad} {
      padding: 1rem;
      text-align: center;
    }
    ${Right} {
      display: none;
    }
  }
`