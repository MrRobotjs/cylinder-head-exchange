import React from 'react'
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import * as variable from 'src/config' 
import { rgba, lighten } from 'polished'
import "react-alice-carousel/lib/alice-carousel.css";
import 'react-tabs/style/react-tabs.css';

const ServiceCard = ({title, description, icon}) => {
    return (
    <Card type="Engine">
      <Url href="#pricing">{title}</Url>
      <Top>
          <Icon dangerouslySetInnerHTML={{__html: icon}} />
      </Top>
      <Bottom>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Bottom>
    </Card>
    )
  }

class Pricing extends React.Component {
    render() {
        return (
<StaticQuery
    query={graphql`
        query {
            allContentfulService {
                edges {
                    node {
                      nameOfService
                      description
                      whatsIncluded
                      vehicleImage {
                        title
                        file {
                          url
                        }
                      }
                      iconSvgFormat {
                        iconSvgFormat
                      }
                    }
                  }
            }
        }
    `}
    render={data => (
        <Content id="services">
        <ServicesHeader>Services</ServicesHeader>
        <Container>
        {data.allContentfulService.edges.map(({ node }) => (
          <ServiceCard 
          title={node.nameOfService}
          icon={node.iconSvgFormat.iconSvgFormat}/>
        ))}
        </Container>
    </Content>
)}
/>
);
}
}

export default Pricing

const ServicesHeader = styled.div``
const Top = styled.div``
const Bottom = styled.div``
const Icon = styled.div``
const IconContainer = styled.div``
const Title = styled.p``
const Url = styled.a``
const Claim = styled(Link)``
const Card = styled.div``
const Container = styled.div``
const Desc = styled.p``
const ServicesDescription = styled.div``

const Content = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
background-color: ${rgba(variable.SiteColor, 0.04)};
  ${ServicesHeader} {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    margin 0 2rem;
    margin-bottom: 0.6rem;
  }
  ${ServicesDescription} {
    color: #585858;
    text-align: center;
    margin 0 2rem;
    margin-bottom: 2.6rem;
  }
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    margin: 0 1rem;
    margin-top: 2.4rem;
    justify-content: center;
    ${Card} {
      background-color: #fff;
      box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.08);
      flex-basis: 15.3rem;
      margin: 0 1rem;
      margin-bottom: 2rem;
      position: relative;
      transition: all linear 260ms;
      display: flex;
      flex-direction: column;
      text-decoration: unset;
      ${Url} {
        font-size: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      ${Top} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem 2.5rem;
        padding-bottom: 0;
        ${Icon} {
          border-radius: 50%;
          height: 65px;
          width: 65px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          pointer-events: none;
          svg {
            height: 60%;
            width: 60%;
            align-self: center;
            fill: #fff;
          }
        }
      }
      ${Bottom} {
        padding: 3rem 3rem;
        padding-top: 0;
        flex-grow: 1;
        ${Title} {
          font-weight: bold;
          margin: 19px 0;
          font-size: 1.2rem;
          color: #000;
        }
        ${Desc} {
          color: #000;
          font-size: 0.8rem;
        }
        ${Claim} {
          align-self: center;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 3px;
          margin-top: auto;
          margin-top: 1.2rem;
          font-weight: bold;
          font-size: 1rem;
          z-index: 1;
          transition: all linear 260ms;
          color: #00c99d;
          background-color: ${rgba("#00c99d", 0.1)};
          &:hover {
            background-color: #00c99d;
            color: #fff;
          }
        }
      }
      &:hover {
        box-shadow: 0px 6px 15px -2px rgba(0, 0, 0, 0.2);
        ${Url} {
          visibility: visible;
        }
        ${Top} {
          ${IconContainer} {
            transform: translateY(-4px);
          }
        }
      }
      &[type="Engine"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#00c99d", 0.15)};
            svg {
              fill: #00c99d;
            }
          }
        }
      }
      &[type="Cylinder"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#3975c3", 0.15)};
            svg {
              fill: #3975c3;
              height: 42%;
              width: 42%;
            }
          }
        }
      }
      &[type="Leak"] {
        ${Top} {
          ${Icon} {
            background-color: ${rgba("#5d57a9", 0.15)};
            svg {
              fill: #5d57a9;
              height: 45%;
              width: 45%;
            }
          }
        }
      }
      &:hover,
      &:active,
      &:focus {
        background-color: ${lighten(0.2, variable.SiteColor)};
        background-color: ${variable.SiteColor};
        ${Top} {
          ${Icon} {
            background-color: #fff;
          }
        }
        ${Bottom} {
          ${Title} {
            color: #fff;
          }
          ${Desc} {
            color: #fff;
          }
        }
      }
      @media screen and (max-width: 1081px) {
        &:nth-child(5) {
          display: none;
        }
        &:nth-child(6) {
          display: none;
        }
      }
      @media screen and (max-width: 729px) {
        flex-basis: 24rem;
        &:nth-child(4) {
          display: none;
        }
      }/*
      @media screen and (max-width: 450px) {
        flex-basis: 21rem;
      }
      @media screen and (max-width: 380px) {
        flex-basis: 18rem;
      }
      @media screen and (max-width: 310px) {
        flex-basis: 16rem;
      }*/
    }
  }
`