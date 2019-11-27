import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Testi from '../testimonial-card'
import * as variable from 'src/config' 
import { darken } from 'polished'

const Testimonials = () => (
<StaticQuery
    query={graphql`
        query {
            allContentfulTestimonial(limit: 5) {
                edges {
                    node {
                        id
                        name
                        review
                    }
                }
            }
        }
    `}
    render={data => {
      return (
        <Section id="testimonials">
            <Header>Testimonials</Header>
            <Sub>Our customers have something to say about us.</Sub>
            <Container>
                {data.allContentfulTestimonial.edges.map(({ node }) => (
                    <Testi 
                    name={node.name}
                    review={node.review}
                    key={node.id}
                    id={node.id}/>
                ))}
            </Container>
            <Buttons>
                <Secondary href="https://g.page/Cylinder-Head-Exchange-Shop?share" target="_blank">Read All</Secondary>
                <Primary href="https://g.page/Cylinder-Head-Exchange-Shop?share" target="_blank">Leave A Review</Primary>
            </Buttons>
        </Section>
);
}}
/>
);

export default Testimonials

const Buttons = styled.div``
const Primary = styled.a``
const Secondary = styled.a``
const Header = styled.div``
const Container = styled.div``
const Sub = styled.p``

const Section = styled.section`
padding-top: 1.5rem;
padding-bottom: 3.5rem;
  ${Header} {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin: 0 2rem;
    margin-bottom: 0.6rem;
  }
  ${Sub} {
    color: #585858;
    text-align: center;
    margin: 0 2rem;
    margin-bottom: 1.6rem;
  }
    ${Buttons} {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: -1rem;
        ${Secondary} {
            color: ${variable.SiteColor};
            margin-right: 9px;
            padding: 8px 17px;
            text-decoration: unset;
            transition: 250ms linear all;
            border-radius: 3px;
            box-shadow: 0 0 0 0 ${variable.SiteColor};
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
            &:hover {
                background-color: ${darken(0.08,variable.SiteColor)};
            }
        }
    }
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 1rem;
    justify-content: center;
  }
`