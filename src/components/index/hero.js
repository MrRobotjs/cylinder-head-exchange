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
                  <Heading>Cylinder Head Exchanges</Heading>
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
  min-height: calc(100vh - 6.5rem); /* - 3rem to make image full screen of monitor minus the header height */
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  > div:first-of-type {
    .alice-carousel__wrapper {
      li {
        min-height: calc(100vh - 6.5rem);
        margin: unset;
      }
    }
  }
  ${Slide} {
    position: absolute;
    height: 100%;
    width: 100%;
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
      bottom: 2rem;
      z-index: 1;
      left: 0;
      margin: 0 2rem;
      ${Top} {
        margin-bottom: 11px;
        ${Heading} {
          color: #fff;
          font-weight: 900;
          background-color: ${variable.SiteColor};
          padding: 0.5rem 1rem;
          font-size: 1.7rem;
          text-transform: uppercase;
          display: -webkit-inline-box;
        }
        ${SubHeading}, ${SubHeadingUrl} {
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
        ${SubHeading}, ${SubHeadingUrl} {
          color: #fff;
          font-weight: bold;
          background-color: ${variable.SiteColor};
          padding: 0.7rem 1.4rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          display: inline-block;
          margin-left: 5px;
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
          width: 48px;
          height: 48px;
          align-self: center;
          padding: unset;
          border-radius: 50px;
          line-height: 0;
          svg {
            position: relative;
            width: 16px;
            height: 16px;
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
@media screen and (max-width: 1050px) {
  .alice-carousel {
    ${Slide} {
      ${Group} {
        bottom: 1.5rem;
        ${Top} {
          ${Heading} {
            font-size: 1.4rem;
            padding: 0.7rem 1rem;
          }
        }
        ${Bottom} {
          ${SubHeading}, ${SubHeadingUrl} {
            font-size: 1.2rem;
            padding: 0.7rem 1rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  .alice-carousel {
    min-height: calc(100vh - 16rem);
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          min-height: calc(100vh - 16rem);
        }
      }
    }
    ${Slide} {
      ${Group} {
        bottom: 1.3rem;
        margin: 0 1.5rem;
        ${Top} {
          ${Heading} {
            font-size: 1.2rem;
            padding: 0.7rem 1rem;
          }
        }
        ${Bottom} {
          ${SubHeading}, ${SubHeadingUrl} {
            font-size: 1rem;
            padding: 0.7rem 1rem;
          }
          ${Button} {
            width: 44px;
            height: 44px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .alice-carousel {
    min-height: calc(100vh - 18rem);
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          min-height: calc(100vh - 18rem);
        }
      }
    }
    ${Slide} {
      ${Group} {
        bottom: 1.1rem;
        margin: 0 1.3rem;
        ${Top} {
          ${Heading} {
            font-size: 1.2rem;
            padding: 0.6rem 0.9rem;
          }
        }
        ${Bottom} {
          ${SubHeading}, ${SubHeadingUrl} {
            font-size: 0.9rem;
            padding: 0.6rem 0.9rem;
          }
          ${Button} {
            width: 39px;
            height: 39px;
            svg {
              height: 14px;
              width: 14px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .alice-carousel {
    ${Slide} {
      ${Group} {
        bottom: 1rem;
        ${Top} {
          ${Heading} {
          }
        }
        ${Bottom} {
          ${SubHeading}, ${SubHeadingUrl} {
          }
        }
      }
    }
  }
}
@media screen and (max-width: 640px) {
  .alice-carousel {
    min-height: calc(100vh - 20rem);
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          min-height: calc(100vh - 20rem);
        }
      }
    }
    ${Slide} {
      ${Group} {
        bottom: 0.8rem;
        margin: 0 1rem;
        ${Top} {
          ${Heading} {
            font-size: 1.1rem;
            padding: 0.5rem 0.8rem;
          }
        }
        ${Bottom} {
          ${Button} {
            height: 33px;
            width: 33px;
            svg {
              width: 14px;
              height: 14px;
            }
          }
          ${SubHeading}, ${SubHeadingUrl} {
            font-size: 0.8rem;
            padding: 0.5rem 0.8rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 510px) {
  .alice-carousel {
    min-height: calc(100vh - 22rem);
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          min-height: calc(100vh - 22rem);
        }
      }
    }
    ${Slide} {
      ${Group} {
        bottom: 0.5rem;
        margin: unset;
        margin-left: 10px;
        ${Top} {
          ${Heading} {
            font-size: 0.9rem;
            padding: 0.4rem 0.7rem;
          }
        }
        ${Bottom} {
          ${Button} {
            top: -2px;
            height: 28px;
            width: 28px;
            svg {
              width: 12px;
              height: 12px;
            }
          }
          ${SubHeading}, ${SubHeadingUrl} {
            padding: 0.4rem 0.7rem;
            font-size: 0.7rem;
          }
        }
      }
    }
  }
}
@media screen 
and (max-width: 1400px)
and (min-height: 820px) {
  .alice-carousel {
    height: 27.7rem;
    min-height: unset;
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          height: 27.7rem;
          min-height: unset;
        }
      }
    }
  }
}
@media screen 
and (max-width: 1050px)
and (min-height: 740px) {
  .alice-carousel {
    height: 24.7rem;
    min-height: unset;
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          height: 24.7rem;
          min-height: unset;
        }
      }
    }
  }
}
@media screen 
and (max-width: 1050px)
and (min-height: 820px) {
  .alice-carousel {
    height: 24.7rem;
    min-height: unset;
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          height: 24.7rem;
          min-height: unset;
        }
      }
    }
  }
}
@media screen 
and (max-width: 800px)
and (min-height: 820px) {
  .alice-carousel {
    height: 20.7rem;
    min-height: unset;
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          height: 20.7rem;
          min-height: unset;
        }
      }
    }
  }
}
@media screen 
and (max-width: 475px)
and (min-height: 500px) {
  .alice-carousel {
    height: 14.7rem;
    min-height: unset;
    > div:first-of-type {
      .alice-carousel__wrapper {
        li {
          height: 14.7rem;
          min-height: unset;
        }
      }
    }
  }
}
`