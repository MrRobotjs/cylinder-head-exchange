import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import * as variable from 'src/config.js'
import {darken} from 'polished'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <Image />
      <QuoteBox>
        <QHeader>Request A Quote TODAY!</QHeader>
        <Body>
          <PhoneNumber
          href="tel:909-000-0000">
            (909) 000-0000
          </PhoneNumber>
          <p>OR</p>
          <RequestBtn
          href="mailto:support@cylinderheadexchangeshop.com">
            Request Quote
          </RequestBtn>
        </Body>
      </QuoteBox>
    </Hero>
    <Navigation>
      <Tab
      href="#top">
        Home
      </Tab>
      <Tab
      href="#bottom">
        bottom
      </Tab>
      <Tab
      href="">
        Home
      </Tab>
    </Navigation>
    <h2 id="top">My Cool Header</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet proin fermentum leo vel orci porta. In iaculis nunc sed augue lacus. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Sagittis purus sit amet volutpat consequat mauris. Maecenas volutpat blandit aliquam etiam. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Quis enim lobortis scelerisque fermentum dui faucibus. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Augue eget arcu dictum varius duis at consectetur.

Odio euismod lacinia at quis risus sed vulputate odio. Diam maecenas ultricies mi eget mauris. Et ultrices neque ornare aenean. Id aliquet risus feugiat in. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Pulvinar pellentesque habitant morbi tristique senectus. Diam vulputate ut pharetra sit amet aliquam id. Ultrices sagittis orci a scelerisque purus. Amet risus nullam eget felis. Et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Pellentesque pulvinar pellentesque habitant morbi. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Adipiscing tristique risus nec feugiat in. Non odio euismod lacinia at quis risus sed. Rhoncus dolor purus non enim praesent.

Vel risus commodo viverra maecenas accumsan lacus. At volutpat diam ut venenatis tellus in. At auctor urna nunc id cursus metus aliquam eleifend. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Placerat duis ultricies lacus sed. Consectetur adipiscing elit duis tristique sollicitudin. Scelerisque fermentum dui faucibus in ornare quam. Pellentesque massa placerat duis ultricies lacus sed turpis. Vitae auctor eu augue ut lectus. Purus in mollis nunc sed id. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vel orci porta non pulvinar neque laoreet suspendisse.

Sem nulla pharetra diam sit amet nisl suscipit. Urna porttitor rhoncus dolor purus non enim praesent. Amet risus nullam eget felis. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Sem viverra aliquet eget sit amet tellus. Amet volutpat consequat mauris nunc. Elementum sagittis vitae et leo duis. Imperdiet proin fermentum leo vel orci porta. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Purus non enim praesent elementum facilisis. Interdum posuere lorem ipsum dolor sit amet. Vitae suscipit tellus mauris a. Est pellentesque elit ullamcorper dignissim cras. Erat nam at lectus urna duis convallis convallis tellus id. Eget sit amet tellus cras adipiscing.

Viverra vitae congue eu consequat ac. Donec pretium vulputate sapien nec sagittis. In hendrerit gravida rutrum quisque. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Varius quam quisque id diam vel quam. Urna nec tincidunt praesent semper feugiat nibh. Urna neque viverra justo nec ultrices dui sapien. Aliquam sem fringilla ut morbi. Scelerisque in dictum non consectetur a erat nam. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Nunc id cursus metus aliquam eleifend mi in. Lorem donec massa sapien faucibus et molestie ac feugiat. Sit amet purus gravida quis blandit. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Id semper risus in hendrerit. At elementum eu facilisis sed odio morbi quis commodo.</p>
    <p>Now go build something great.</p>
    <h2 id="bottom">My Cool Header</h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

const RequestBtn = styled.a`
`

const PhoneNumber = styled.a`
`

const Tab = styled.a`
`

const QuoteBox = styled.div`
`

const QHeader = styled.div`
`

const Body = styled.div`
`

const Navigation = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${variable.SiteColor};
  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0;
  justify-content: center;
  ${Tab} {
    color: #fff;
    text-decoration: unset;
    padding: 11px 15px;
    font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
    margin-right: 10px;
    font-size: 1.1rem;
    &:hover {
      background-color: #fff;
      color: ${variable.SiteColor};
    }
  }
`

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
  ${QuoteBox} {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 4rem;
    top: 40%;
    z-index: 2;
    font-family: "Google Sans","Roboto",Arial,Helvetica,sans-serif;
    box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
    ${QHeader} {
      background-color: ${variable.SiteColor};
      color: #fff;
      font-size: 1rem;
      padding: 10px 45px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      text-align: center;
    }
    ${Body} {
      background-color: #fff;
      padding: 21px 16px;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      display: flex;
      flex-direction: column;
      ${PhoneNumber} {
        align-self: center;
        color: ${variable.SiteColor};
        font-weight: bold;
        text-decoration: unset;
        font-size: 2rem;
        transition: 250ms color ease-in-out;
        &:hover {
          color: ${darken(0.18, variable.SiteColor)}
        }
      }
      p {
        align-self: center;
        margin: 0.5rem 0;
        font-size: 0.6rem;
      }
      ${RequestBtn} {
        align-self: center;
        background-color: ${variable.SiteColor};
        padding: 8px 16px;
        color: #fff;
        text-decoration: unset;
        border-radius: 3px;
        transition: 250ms background-color ease-in-out;
        &:hover {
          background-color ${darken(0.18, variable.SiteColor)};
        }
      }
    }
  }
`