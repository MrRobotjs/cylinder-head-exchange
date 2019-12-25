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
        PlaceholderImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Second: file(relativePath: { eq: "hero1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    
    render={data => (
      <Section>
          <AliceCarousel
          autoPlay={true}
          autoPlayInterval={7000}
          mouseDragEnabled
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          ref={(el) => (this.Carousel = el)}>
            <Slide onDragStart={handleOnDragStart}>
              <Img fluid={data.PlaceholderImage.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
              <Group>
                <Top>
                  <Heading>5498 W Mission Blvd A</Heading>
                </Top>
                <Bottom>
                  <Button onClick={() => this.Carousel.slidePrev()}>
                    <svg aria-hidden="true" className="icon icon-arrow-left" viewBox="0 0 32 32">
                        <path
                          fill="#444"
                          d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"
                        ></path>
                      </svg>
                      <span>Prev button</span></Button>
                  <Button onClick={() => this.Carousel.slideNext()}>
                  <svg
                    aria-hidden="true"
                    className="icon icon-arrow-right"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#444"
                      d="M7.667 3.795l1.797-1.684L24.334 16 9.464 29.889l-1.797-1.675L20.731 16z"
                    ></path>
                  </svg>
                  <span>Next button</span></Button>
                  <SubHeading>Get Directions <span>→</span></SubHeading>
                </Bottom>
              </Group>
            </Slide>
            <Slide onDragStart={handleOnDragStart}>
              <Img fluid={data.Second.childImageSharp.fluid} style={{ height: '100%'}} alt="Hero"/>
              <Group>
                <Top>
                  <Heading>Cylinder Head Exchange</Heading>
                </Top>
                <Bottom>
                  <Button onClick={() => this.Carousel.slidePrev()}>
                    <svg aria-hidden="true" className="icon icon-arrow-left" viewBox="0 0 32 32">
                      <path
                        fill="#444"
                        d="M24.333 28.205l-1.797 1.684L7.666 16l14.87-13.889 1.797 1.675L11.269 16z"
                      ></path>
                    </svg>
                    <span>Prev button</span></Button>
                  <Button onClick={() => this.Carousel.slideNext()}>
                  <svg
                    aria-hidden="true"
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
                  <SubHeadingUrl href="#services">View Services <span>→</span></SubHeadingUrl>
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
const SubHeadingUrl = styled.a``

const Section = styled.section`
.alice-carousel {
  box-sizing: unset;
  margin: unset;
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  > div:first-of-type {
    .alice-carousel__wrapper {
      li {
        padding-top: 40.25%;
        padding-top: 90.25%;
        margin: unset;
      }
    }
  }
  ${Slide} {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    .gatsby-image-wrapper {
      &::before {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        content: ' ';
        background-color: rgba(0,0,0,.3);
        z-index: 1;
      }
    }
    ${Group} {
      position: absolute;
      bottom: 1.5vw;
      z-index: 1;
      left: 0;
      margin: 0 2.5vw;
      ${Top} {
        margin-right: 11px;
        ${Heading} {
          color: #fff;
          font-weight: 700;
          background-color: ${variable.SiteColor};
          font-size: 1.4rem;
          padding: 0.4rem 0.5rem;
          text-transform: uppercase;
          display: inline;
          line-height: 2.05;
          -webkit-box-decoration-break: clone;
        }
      }
      ${Bottom} {
        display: flex;
        ${SubHeading}, ${SubHeadingUrl} {
          color: #fff;
          font-weight: bold;
          background-color: ${variable.SiteColor};
          padding: 0.4rem 0.7rem;
          font-size: 0.9rem;
          display: inline-block;
          text-decoration: unset;
          transition: all linear 250ms;
          border-radius: 50px;
          box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
        }
        ${SubHeadingUrl} {
          &:hover {
            background-color: ${darken(0.16, variable.SiteColor)};;
          }
        }
        ${Button} {
          background-color: #fff;
          border: unset;
          transition: background-color 0.15s ease-in;
          margin-right: 6px;
          line-height: 0;
          svg {
            position: relative;
            width: 11px;
            height: 11px;
            fill: currentColor;
            path {
              fill: #000;
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
          &:hover,
          &:focus,
          &:active {
            background-color: ${variable.SiteColor};
            outline: unset;
            svg {
              path {
                fill: #fff;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 370px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 75.25%;
        }
      }
    }
    ${Slide} {
      ${Group} {
        ${Top} {
          ${Heading} {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 410px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 65.25%;
        }
      }
    }
  }
}
@media screen and (min-width: 610px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 60.25%;
        }
      }
    }
  }
}
@media screen and (min-width: 727px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 59.75%;
        }
      }
    }
  }
}
@media screen and (min-width: 910px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 55.75%;
        }
      }
    }
  }
}
@media screen and (min-width: 975px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 51.75%;
        }
      }
    }
  }
}
@media screen and (min-width: 1052px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 48%;
        }
      }
    }
  }
}
@media screen and (min-width: 1133px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 44.50%;
        }
      }
    }
  }
}
@media screen and (min-width: 1180px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 42.50%;
        }
      }
    }
  }
}
@media screen and (min-width: 1215px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 41.50%;
        }
      }
    }
  }
}
@media screen and (min-width: 1260px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 40%;
        }
      }
    }
  }
}
@media screen and (min-width: 1304px) {
  .alice-carousel {
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          padding-top: 31.50%;
        }
      }
    }
  }
}
`