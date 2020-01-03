import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import * as variable from 'src/config' 
import { darken, rgba } from 'polished'
import Avatar from 'src/images/user.svg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Ratings from 'react-ratings-declarative';

class Testimonials extends React.Component {
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
            allContentfulTestimonial(limit: 5) {
                edges {
                    node {
                        id
                        name
                        review
                        link
                        starRating
                    }
                }
            }
        }
    `}
    render={data => (
        <Section id="testimonials">
            <Header>Testimonials</Header>
            <Sub>Our customers have something to say about us.</Sub>
            <Container>
            <AliceCarousel
            autoPlay={true}
            autoPlayInterval={7000}
            mouseDragEnabled
            dotsDisabled={true}
            buttonsDisabled={true}
            ref={(el) => (this.Carousel = el)}>
            {data.allContentfulTestimonial.edges.map(({ node }, i) => (
                <Test onDragStart={handleOnDragStart} key={node.id}>
                    <Left>
                        <IconContainer>
                            <Icon>
                            
                            </Icon>
                        </IconContainer>
                        <ButtonContainer>
                            <Button onClick={() => this.Carousel.slidePrev()}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 31.49 31.49"
                                version="1.1"
                                viewBox="0 0 31.49 31.49"
                                xmlSpace="preserve"
                                >
                                <path
                                    fill="#1E201D"
                                    d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"
                                ></path>
                                </svg>
                            </Button>
                            <Button onClick={() => this.Carousel.slideNext()}>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                enableBackground="new 0 0 31.49 31.49"
                                version="1.1"
                                viewBox="0 0 31.49 31.49"
                                xmlSpace="preserve"
                                >
                                <path
                                    fill="#1E201D"
                                    d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"
                                ></path>
                                </svg>
                            </Button>
                        </ButtonContainer>
                    </Left>
                    <Right>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="123.961"
                        height="123.961"
                        x="0"
                        y="0"
                        enableBackground="new 0 0 123.961 123.961"
                        version="1.1"
                        viewBox="0 0 123.961 123.961"
                        xmlSpace="preserve">
                            <path d="M49.8 29.032c3.1-1.3 4.4-5 3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899-8.5 3.6-15.8 8.3-21.6 14C11.4 28.532 6.6 36.232 4 44.732c-2.6 8.601-4 20.3-4 35.2v30.7c0 3.3 2.7 6 6 6h39.3c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H26.5c.2-10.101 2.6-18.2 7-24.301 3.6-4.898 9-8.898 16.3-11.999zM120.4 29.032c3.1-1.3 4.399-5 3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9-8.4 3.6-15.601 8.3-21.5 13.9-7.101 6.8-12 14.5-14.601 23-2.6 8.399-3.899 20.1-3.899 35.1v30.7c0 3.3 2.7 6 6 6H116c3.3 0 6-2.7 6-6v-39.3c0-3.301-2.7-6-6-6H97.1c.2-10.101 2.601-18.2 7-24.301 3.6-4.899 9-8.899 16.3-12z"></path>
                        </svg>
                        <Ratings
                        rating={node.starRating}
                        widgetRatedColors={variable.SiteColor}
                        widgetDimensions="17px"
                        widgetSpacings="2px">
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                        </Ratings>
                        <Desc>{node.review}</Desc>
                        <Name>{node.name}</Name>
                        <Title>Google Reviewer</Title>
                    </Right>
                    <ButtonContainer>
                        <Button onClick={() => this.Carousel.slidePrev()}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 31.49 31.49"
                            version="1.1"
                            viewBox="0 0 31.49 31.49"
                            xmlSpace="preserve"
                            >
                            <path
                                fill="#1E201D"
                                d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"
                            ></path>
                            </svg>
                        </Button>
                        <Button onClick={() => this.Carousel.slideNext()}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 31.49 31.49"
                            version="1.1"
                            viewBox="0 0 31.49 31.49"
                            xmlSpace="preserve"
                            >
                            <path
                                fill="#1E201D"
                                d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"
                            ></path>
                            </svg>
                        </Button>
                    </ButtonContainer>
                </Test>
            ))}
                </AliceCarousel>
            </Container>
            <Buttons>
                <Secondary href="https://www.google.com/maps/place/Cylinder+Head+Exchange/@34.056385,-117.6877477,17z/data=!3m1!4b1!4m7!3m6!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!8m2!3d34.056385!4d-117.685559!9m1!1b1" target="_blank">Read All</Secondary>
                <Primary href="https://g.page/Cylinder-Head-Exchange-Shop?share" target="_blank">Leave A Review</Primary>
            </Buttons>
        </Section>
)}
/>
);
}
}

export default Testimonials

const Buttons = styled.div``
const Primary = styled.a``
const Secondary = styled.a``
const Header = styled.div``
const Container = styled.div``
const Sub = styled.p``
const Test = styled.div``
const Left = styled.div``
const Right = styled.div``
const Icon = styled.div``
const IconContainer = styled.div``
const Desc = styled.div``
const Name = styled.div``
const Title = styled.div``
const Button = styled.button``
const ButtonContainer = styled.div``

const Section = styled.section`
padding: 3rem 0;
background-color: ${rgba(variable.SiteColor, 0.04)};
display: flex;
flex-direction: column;
    ${Header} {
        text-align: center;
        font-size: 2.8rem;
        font-weight: bold;
        margin: 0 2rem;
        margin-bottom: 0.6rem;
        white-space: nowrap;
    }
    ${Sub} {
        color: #585858;
        text-align: center;
        margin: 0 2rem;
        max-width: 270px;
        align-self: center;
        line-height: 1.5;
    }
    ${Buttons} {
        display: flex;
        justify-content: center;
        ${Secondary} {
            color: ${variable.SiteColor};
            margin-right: 9px;
            padding: 8px 17px;
            text-decoration: unset;
            transition: 250ms linear all;
            border-radius: 3px;
            box-shadow: 0 0 0 0 ${variable.SiteColor};
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            &:hover {
                background-color: ${variable.SiteColor};
                color: #fff;
                box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
            }
        }
        ${Primary} {
            background-color: ${variable.SiteColor};
            box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
            color: #fff;
            margin-left: 9px;
            padding: 8px 17px;
            text-decoration: unset;
            border-radius: 3px;
            transition: 250ms linear all;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            &:hover {
                background-color: ${darken(0.08,variable.SiteColor)};
            }
        }
    }
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem;
    justify-content: center;
    ${Test} {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin: 2.3rem 0;
        margin-bottom: 2rem;
        ${Left} {
            flex: 1 1;
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            ${IconContainer} {
                align-self: center;
                border-radius: 50%;
                height: 85px;
                width: 85px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                transition: all linear 260ms;
                margin-bottom: 15px;
                ${Icon} {
                  align-self: center;
                  border-radius: 50%;
                  height: 85px;
                  width: 85px;
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
                  background-color: #fff;
                  background-image: url(${Avatar});
                  background-position: center;
                  background-repeat: no-repeat;
                  background-size: cover;
                }
            }
            ${ButtonContainer} {
                display: none;
            }
        }
        ${Right} {
            flex: 1 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 300px;
            align-self: center;
            margin-bottom: 1.5rem;
            svg {
                display: none;
            }
            .widget-ratings {
                svg {
                    margin-bottom: unset;
                    display: initial;
                }
            }
            ${Desc} {
                align-self: center;
                font-size: 0.85rem;
                margin-bottom: 0.8rem;
                line-height: 1.6;
                order: 1;
                max-width: 300px;
                color: #2b5057;
            }
            ${Name} {
                font-weight: 600;
                font-size: 1.2rem;
                order: 2;
                margin-bottom: 0.1rem;
                color: #2b5057;
            }
            ${Title} {
                order: 3;
                font-weight: 600;
                font-size: 0.9rem;
                color: #2b5057;
            }
        }
        ${ButtonContainer} {
            align-self: center;
            display: flex;
            width: 140px;
            justify-content: center;
            ${Button} {
                background-color: unset;
                border: 1px solid #3e3e3e;
                border-radius: 100%;
                height: 40px;
                width: 40px;
                display: flex;
                justify-content: center;
                padding: unset;
                margin-left: 9px;
                margin-right: unset;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                svg {
                    height: 20px;
                    width: 20px;
                    align-self: center;
                    path {
                        fill: #3e3e3e;
                    }
                }
                &:focus,
                &:hover {
                    outline: unset;
                    background-color: ${variable.SiteColor};
                    border: #fff;
                    svg {
                        path {
                            fill: #fff;
                        }
                    }
                }
                &:first-of-type {
                    margin-right: 9px;
                    margin-left: unset;
                    svg {
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
  }
  @media screen and (min-width: 798px) {
    ${Container} {
        ${Test} {
            flex-direction: row;
            ${Left} {
                margin-right: 4.5rem;
                ${IconContainer} {
                    align-self: flex-end;
                    height: 140px;
                    width: 140px;
                    margin-bottom: 35px;
                    ${Icon} {
                        height: 140px;
                        width: 140px;
                    }
                }
                ${ButtonContainer} {
                    align-self: flex-end;
                    display: flex;
                    width: 140px;
                    justify-content: center;
                    ${Button} {
                        background-color: unset;
                        border: 1px solid #3e3e3e;
                        border-radius: 100%;
                        height: 40px;
                        width: 40px;
                        display: flex;
                        justify-content: center;
                        padding: unset;
                        margin-left: 9px;
                        margin-right: unset;
                        svg {
                            height: 20px;
                            width: 20px;
                            align-self: center;
                            path {
                                fill: #3e3e3e;
                            }
                        }
                        &:focus,
                        &:hover {
                            outline: unset;
                            background-color: ${variable.SiteColor};
                            border: #fff;
                            svg {
                                path {
                                    fill: #fff;
                                }
                            }
                        }
                        &:first-of-type {
                            margin-right: 9px;
                            margin-left: unset;
                            svg {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
            ${Right} {
                margin-left: 4.5rem;
                max-width: unset;
                margin-bottom: unset;
                svg {
                    height: 55px;
                    width: 55px;
                    align-self: center;
                    margin-bottom: 1.5rem;
                    align-self: flex-start;
                    display: initial;
                    path {
                        fill: #2b5057;
                    }
                }
                ${Desc} {
                    align-self: flex-start;
                }
                ${Name} {
                    align-self: flex-start;
                }
            }
            ${ButtonContainer} {
                display: none;
            }
        }
    }
  }
`