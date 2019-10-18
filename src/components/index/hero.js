import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import { StaticQuery, graphql } from "gatsby"
import TextLoop from "react-text-loop";
import GoogleMapReact from 'google-map-react';
import {darken} from 'polished'
import Img from "gatsby-image"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class HeroCom extends React.Component {
  items = [1, 2, 3, 4, 5]
 
  state = {
    galleryItems: this.items.map((i) => (<h2 key={i}>{i}</h2>))
  }
  render() {
    const handleOnDragStart = e => e.preventDefault()
    return (
    <StaticQuery
    query={graphql`
      query {
        Site: contentfulWebsiteInformation {
            websiteName
            shopInformation {
              address
              phoneNumber
              shopHours {
                sunday
                mondaySaturday
              }
            }
        },
        PlaceholderImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    
    render={data => (
      <Section>
        <Hero>
          <Slide>
            <Img fluid={data.PlaceholderImage.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
            <Group>
              <Heading>The best auto shop</Heading>
              <SubHeading>This is a subheading</SubHeading>
            </Group>
          </Slide>
        </Hero>
      </Section>
    )}
    />
    );
  }
}

export default HeroCom

const Section = styled.section``
const LocationHeader = styled.div``
const QuoteContainer = styled.div``
const SecondaryText =styled.div``
const PrimaryText = styled.div``
const ScheduleHeader = styled.div``
const Left = styled.div``
const Right = styled.div``
const DetailsContainer = styled.div``
const DirectionsBtn = styled.a``
const Directions = styled.div``
const Call = styled.a``
const Center = styled.div``
const ShopHeader = styled.div``
const HoursContainer = styled.div``
const HeroText = styled.div``
const HeroHeader = styled.h1``
const HeaderLoop = styled.h2``
const Phone = styled.div``
const TableHours = styled.table``
const Row = styled.tr``
const Data = styled.td``
const MapContainer = styled.div``
const Tooltip = styled.span``
const MapBtn = styled.a``
const Slide = styled.div``
const Group = styled.div``
const Heading = styled.div``
const SubHeading = styled.div``

const Hero2 = styled.div`
max-height: calc(100vh - 7rem); /* - 3rem to make image full screen of monitor minus the header height */
display: flex;
justify-content: center;
flex-direction: column;
background-color: #fff;
padding: 1.6rem 0.8rem;
display: none;
${HeroHeader} {
  text-align: center;
  margin-bottom: 0.8rem;
  font-weight: bold;
  font-size: 2.8rem;
}
.Loop {
  margin: 0 auto;
  padding-bottom: 3px;
  ${HeaderLoop} {
    font-size: 2.8rem;
    line-height: 1.1;
    margin: unset;
    text-align: center;
    font-weight: bold;
  }
}
${Phone} {
  text-align: center;
  font-weight: bold;
  color: ${variable.SiteColor};
  margin-top: 0.7rem;
  font-size: 2.1rem;
}
`

const Hero = styled.div`
  max-height: calc(100vh - 7rem); /* - 3rem to make image full screen of monitor minus the header height */
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    content: ' ';
    background-color: rgba(0,0,0,.5);
    background-color: rgba(0,0,0,.2);
    z-index: 1;
  }
  .alice-carousel {
    box-sizing: unset;
    position: unset;
    width: unset;
    margin: unset;
  }
  ${Slide} {
    ${Group} {
      position: absolute;
      bottom: 1rem;
      z-index: 1;
      left: 0;
      ${Heading} {
        color: #fff;
        font-weight: bold;
        background-color: ${variable.SiteColor};
        padding: 0.7rem 1.4rem;
        font-size: 1.7rem;
        text-transform: uppercase;
      }
      ${SubHeading} {
        color: #fff;
        font-weight: bold;
        background-color: ${darken(0.12, variable.SiteColor)};
        padding: 0.7rem 1.4rem;
        font-size: 1.2rem;
        text-transform: uppercase;
        display: inline-block;
      }
    }
  }
  
  @media screen and (max-width: 1080px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 4rem;
      }
      ${SecondaryText} {

      }
    }
  }
  @media screen and (max-width: 964px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 3rem;
      }
      ${SecondaryText} {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 854px) {
    ${HeroText} {
      ${PrimaryText} {
        font-size: 2.5rem;
      }
      ${SecondaryText} {
          font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 798px) {
    ${HeroText} {
      display: none;
      ${PrimaryText} {
        font-size: 2.5rem;
      }
      ${SecondaryText} {
          font-size: 1.5rem;
      }
    }
    ${QuoteContainer} {
      width: 92%;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  @media screen and (max-width: 698px) {
    ${QuoteContainer} {
      height: 86%;
      padding-bottom: 0.4rem;
    }
  }
  @media screen and (max-height: 503px) {
    ${QuoteContainer} {
      height: 86%;
      padding-bottom: 0.4rem;
    }
  }
  @media screen and (max-width: 475px) {
    ${QuoteContainer} {
      ${HoursContainer} {
        display: none;
      }
      ${DetailsContainer} {
        margin-bottom: unset;
        ${Right} {
          display: none;
        }
        ${Left} {
          ${Center} {
            ${Call} {
              display: none;
            }
            ${DirectionsBtn} {
              color: ${variable.SiteColor};
              font-size: 1.3rem;
              text-align: center;
              padding: 0.4rem 0.9rem;
              font-weight: bold;
              display: inline-block;
              text-decoration: unset;
              margin: 0rem -1rem;
              svg {
                height: 17px;
                width: 17px;
                margin-right: 6px;
                fill: ${variable.SiteColor};
              }
              &:hover {
                background-color: ${variable.SiteColor};
                color: #fff;
                svg {
                  fill: #fff;
                }
              }
            }
          }
          ${LocationHeader} {
            margin-bottom: 0.9rem;
          }
          ${Directions} {
            margin-bottom: 0.5rem;
          }
          ${HoursContainer} {
            display: block;
            margin-top: 0.6rem;
            margin-bottom: 0.4rem;
            ${ShopHeader} {
              margin-bottom: 0.7rem;
            }
          }
          ${MapContainer} {
            display: initial;
          }
        }
      }
    }
  }
`