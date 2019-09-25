import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import * as variable from 'src/config.js'
import styled from 'styled-components'


const pluginCard = ({author}) => (
    <StaticQuery
    query={ graphql`
    query {
        contentfulWebsiteInformation {
            id
            websiteName
            websiteDescription {
                id
                websiteDescription
            }
            shopInformation {
                address
                phoneNumber
            }
        }
    }
    `}
    
    render={data => (

    <Footer>
        <Website>
            <WebsiteName>{data.contentfulWebsiteInformation.websiteName}</WebsiteName>
            <p>Copyright {new Date().getFullYear()},</p>
            <p>All Rights Reserved</p>
            <Social>
                <a href="https://www.facebook.com/CylinderHeadExchangeShop/" target="blank">
                    <Icon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="430.113"
                            height="430.114"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 430.113 430.114"
                            version="1.1"
                            viewBox="0 0 430.113 430.114"
                            xmlSpace="preserve"
                            >
                            <path d="M158.081 83.3v59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805s5.601-34.721 8.316-72.685H247.54V92.74c0-7.4 9.717-17.354 19.321-17.354h48.557V.001h-66.021C155.878-.004 158.081 72.48 158.081 83.3z" />
                        </svg>
                    </Icon>
                </a>
                <a href="https://www.instagram.com/cylinderheadexchangeshop/" target="blank">
                    <Icon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="169.063"
                            height="169.063"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 169.063 169.063"
                            version="1.1"
                            viewBox="0 0 169.063 169.063"
                            xmlSpace="preserve"
                            >
                            <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
                            <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
                        </svg>
                    </Icon>
                </a>
            </Social>
        </Website>
        <CategoryLinks>
            <Header>Links</Header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/offers">Offers</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/404">404</Link></li>
            </ul>
        </CategoryLinks>
        <CategoryContact>
            <Header>Contact Us</Header>
            <ul>
                <li>
                    <a href="tel:909-282-5198" target="blank">{data.contentfulWebsiteInformation.shopInformation.phoneNumber}</a>
                </li>
                <li>
                    <a href="https://www.google.com/maps/dir//Cylinder+Head+Exchange,+5498+W+Mission+Blvd+A,+Ontario,+CA+91762/@34.0565074,-117.7555996,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x80c333c0eb3839e5:0xae9d7fc2b83f00bd!2m2!1d-117.685559!2d34.056385" target="blank">{data.contentfulWebsiteInformation.shopInformation.address}</a>
                </li>
            </ul>
        </CategoryContact>
    </Footer>

)}
/>
)

export default pluginCard

const WebsiteName = styled.div``
const Website = styled.div``
const CategoryContact = styled.div``
const Header = styled.div``
const Social = styled.div``
const Icon = styled.div``
const CategoryLinks = styled.div``

const Footer = styled.footer`
padding: 1.4rem 4rem;
margin: unset;
position: relative;
display: flex;
justify-content: space-evenly;
overflow: hidden;
background-color: ${variable.SiteColor};
flex-wrap: wrap;
&::before {
    content: "";
    width: 100%;
    background-color: ${variable.SiteColor};
    height: 100%;
    position: absolute;
    z-index: -1;
    transform: rotate(15deg);
}
${CategoryContact},
${CategoryLinks} {
    flex: 1;
    ${Header} {
        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
        position: relative;
        display: -webkit-inline-box;
        &::after {
            content: "";
            width: 30%;
            height: 0.2rem;
            position: absolute;
            bottom: -4px;
            left: 0;
            z-index: 1;
            background-color: #fff;
        }
    }
    ul {
        margin: unset;
        margin-top: 0.7rem;
        li {
            list-style: none;
            margin-bottom: 0.3rem;
            a {
                color: #fff;
                text-decoration: unset;
            }
        }
    }
}
${Website} {
    flex: 2;
    margin-right: 3.2rem;
    ${Social} {
        display: flex;
        margin-top: 0.8rem;
        ${Icon} {
            margin-right: 0.5rem;
            height: 30px;
            width: 30px;
            border: 2px solid #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            transition: all linear 280ms;
            svg {
                width: 60%;
                height: 60%;
                align-self: center;
                fill: #fff;
            }
            &:hover {
                background-color: #fff;
                svg {
                    fill: #000;
                }
            }
        }
    }
    ${WebsiteName} {
        color: #fff;
        font-weight: bold;
        font-size: 1.9rem;
        font-family: "Racing Sans One";
        align-self: center;
        margin-bottom: 0.6rem;
    }
    p {
        color: #fff;
        margin-bottom: 0.17rem;
    }
}
@media screen and (max-width: 798px) {
    flex-direction: column;
    padding: 1.4rem 1.5rem;
    ${Website} {
        order: 2;
        ${WebsiteName} {
            text-align: center;
            font-size: 2.2rem;
        }
        p {
            text-align: center;
        }
        ${Social} {
            justify-content: center;
        }
    }
    ${CategoryLinks} {
        display: none;
    }
    ${CategoryContact} {
        margin-bottom: 1.4rem;
        order: 1;
        display: none;
    }
  }
`