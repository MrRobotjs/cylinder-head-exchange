import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import { StaticQuery, graphql } from "gatsby"
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
          <AliceCarousel
          mouseDragEnabled
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}>
            <Slide onDragStart={handleOnDragStart}>
              <Img fluid={data.PlaceholderImage.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
              <Group>
                <Top>
                  <Heading>The best auto shop</Heading>
                  <SubHeading>This is a subheading</SubHeading>
                </Top>
                <Bottom>
                  <Button onClick={() => this.Carousel.slidePrev()}>
                    <svg ariaHidden="true" className="icon icon-arrow-left" viewBox="0 0 32 32">
                        <path
                          fill="#444"
                          d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"
                        ></path>
                      </svg>
                      <span>Prev button</span></Button>
                  <Button onClick={() => this.Carousel.slideNext()}>
                  <svg
                    ariaHidden="true"
                    className="icon icon-arrow-right"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#444"
                      d="M7.667 3.795l1.797-1.684L24.334 16 9.464 29.889l-1.797-1.675L20.731 16z"
                    ></path>
                  </svg>
                  <span>Next button</span></Button>
                </Bottom>
              </Group>
            </Slide>
            <Slide onDragStart={handleOnDragStart}>
              <Img fluid={data.PlaceholderImage.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
              <Group>
                <Top>
                  <Heading>The best auto shop 2</Heading>
                  <SubHeading>This is a subheading</SubHeading>
                </Top>
                <Bottom>
                  <Button onClick={() => this.Carousel.slidePrev()}>
                    <svg ariaHidden="true" className="icon icon-arrow-left" viewBox="0 0 32 32">
                      <path
                        fill="#444"
                        d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"
                      ></path>
                    </svg>
                    <span>Prev button</span></Button>
                  <Button onClick={() => this.Carousel.slideNext()}>
                  <svg
                    ariaHidden="true"
                    className="icon icon-arrow-right"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#444"
                      d="M7.667 3.795l1.797-1.684L24.334 16 9.464 29.889l-1.797-1.675L20.731 16z"
                    ></path>
                  </svg>
                  <span>Next button</span>
                  </Button>
                </Bottom>
              </Group>
            </Slide>
            <Slide onDragStart={handleOnDragStart}>
              <Img fluid={data.PlaceholderImage.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
              <Group>
                <Top>
                  <Heading>The best auto shop</Heading>
                  <SubHeading>This is a subheading 3</SubHeading>
                </Top>
                <Bottom>
                  <Button onClick={() => this.Carousel.slidePrev()}>
                    <svg ariaHidden="true" className="icon icon-arrow-left" viewBox="0 0 32 32">
                      <path
                        fill="#444"
                        d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"
                      ></path>
                    </svg>
                    <span>Prev button</span></Button>
                  <Button onClick={() => this.Carousel.slideNext()}>
                  <svg
                    ariaHidden="true"
                    className="icon icon-arrow-right"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#444"
                      d="M7.667 3.795l1.797-1.684L24.334 16 9.464 29.889l-1.797-1.675L20.731 16z"
                    ></path>
                  </svg>
                  <span>Next button</span>
                  </Button>
                </Bottom>
              </Group>
            </Slide>
          </AliceCarousel>
      </Section>
    )}
    />
    );
  }
}

export default HeroCom

const Top = styled.div``
const Bottom = styled.div``
const Slide = styled.div``
const Group = styled.div``
const Heading = styled.div``
const SubHeading = styled.div``
const Button = styled.button``

const Section = styled.section`
.alice-carousel {
  box-sizing: unset;
  margin: unset;
  max-height: calc(100vh - 7rem); /* - 3rem to make image full screen of monitor minus the header height */
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  > div:first-of-type {
    .alice-carousel__wrapper {
      li {
        max-height: calc(100vh - 7rem);
        margin: unset;
      }
    }
  }
  ${Slide} {
    .gatsby-image-wrapper {
      &::before {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      content: ' ';
      background-color: rgba(0,0,0,.2);
      z-index: 1;
    }
  }
  ${Group} {
    position: absolute;
    bottom: 3rem;
    z-index: 1;
    left: 0;
    /*opacity: 0;
    transform: translateY(40px);
    animation: HeroAnim;
    animation-fill-mode: forwards;
    animation-duration: 3s;*/
    ${Top} {
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
    ${Bottom} {
      display: flex;
      ${Button} {
        background-color: #222;
        border: unset;
        transition: background-color 0.15s ease-in;
        padding: 10px 15px;
        svg {
          position: relative;
          width: 11px;
          height: 11px;
          fill: currentColor;
          top: -1px;
          path {
            fill: #fff;
          }
        }
        span {
          position: absolute !important;
          overflow: hidden;
          clip: rect(0 0 0 0);
          height: 1px;
          width: 1px;
          margin: -1px;
          padding: 0;
          border: 0;
        }
        &:hover {
          background-color: #363636;
        }
      }
    }
  }
}
`