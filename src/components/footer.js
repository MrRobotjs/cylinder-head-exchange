import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
        }
    }
    `}
    
    render={data => (

    <Footer>
        <Website>
            <WebsiteName>{data.contentfulWebsiteInformation.websiteName}</WebsiteName>
        </Website>
        <Category>
            <Header>Links</Header>
        </Category>
        <Category>
            <Header>Contact Us</Header>
        </Category>
    </Footer>

)}
/>
)

export default pluginCard

const WebsiteName = styled.div``
const Website = styled.div``
const Category = styled.div``
const Header = styled.div``

const Footer = styled.footer`
padding: 1.4rem 4rem;
margin: unset;
position: relative;
display: flex;
justify-content: center;
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
${Category} {
    flex: 1;
    ${Header} {
        color: #fff;
        font-size: 1.4rem;
        font-weight: bold;
    }
}
${Website} {
    flex: 1;
    margin-right: 0.6rem;
    ${WebsiteName} {
        color: #fff;
        font-weight: bold;
        font-size: 1.6rem;
        font-family: "Racing Sans One";
        align-self: center;
    }
}
`