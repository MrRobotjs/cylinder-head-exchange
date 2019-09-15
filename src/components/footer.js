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
        <WebsiteName>Footer</WebsiteName>
    </Footer>

)}
/>
)

export default pluginCard

const WebsiteName = styled.div``

const Footer = styled.footer`
padding: 20px 10px;
background-color: ${variable.SiteColor};
display: flex;
justify-content: center;
${WebsiteName} {
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    font-family: "Racing Sans One";
}
`