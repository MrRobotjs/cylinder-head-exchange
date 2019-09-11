import React from 'react';
import Helmet from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Favicon180 from '../images/Favicon180.png'
import Favicon32 from '../images/Favicon32.png'
import * as variable from 'src/config.js'

const Helmett = ({ theme = {}, title, description }) => (
  <StaticQuery
    query={graphql`
        query {
            contentfulWebsiteInformation {
                id
                websiteName
                websiteDescription {
                    id
                    websiteDescription
                }
                favicon180x180 {
                    fixed {
                      src
                    }
                  }
            }
        }
    `}
    render={data => {
        const metaDescription = description || data.contentfulWebsiteInformation.websiteDescription.websiteDescription
      return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>
          {title?
            `${title} | ${data.contentfulWebsiteInformation.websiteName}`
          :
            `${data.contentfulWebsiteInformation.websiteName}`
          }</title>
          <meta name="description" content={metaDescription} />
          <link rel="shortcut icon" href={data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta name="theme-color" content={variable.SiteColor}/>
          <meta name="image" content={data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta itemProp="name" content={title + "|" + data.contentfulWebsiteInformation.websiteName} />
          <meta itemProp="description" content={metaDescription} />
          <meta itemProp="image" content={data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta name="og:title" content={title + "|" + data.contentfulWebsiteInformation.websiteName} />
          <meta name="og:description" content={metaDescription} />
          <meta name="og:image" content={data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta name="og:site_name" content={title + "|" + data.contentfulWebsiteInformation.websiteName} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title + "|" + data.contentfulWebsiteInformation.websiteName} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={Favicon180} />
          <meta
            name="twitter:image:src"
            content={Favicon180}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={data.contentfulWebsiteInformation.favicon180x180.fixed.src}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={Favicon32}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href=""
          />
        </Helmet>
      );
    }}
  />
);

Helmett.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmett);