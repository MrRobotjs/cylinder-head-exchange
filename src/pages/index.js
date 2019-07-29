import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Image />
    </Hero>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

const Hero = styled.div`
  max-height: calc(100vh - 3rem);
  display: block;
  width: 100%;
  margin-top: -26px;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    content: ' ';
    background-color: rgba(0,0,0,.5);
    z-index: 1;
  }
`