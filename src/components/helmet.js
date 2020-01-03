import React from 'react';
import Helmet from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Safari from '../images/safari-pinned-tab.svg'
import Tile from '../images/mstile-144x144.png'
import * as variable from 'src/config.js'

const Helmett = ({ title, description, page }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        contentfulWebsiteInformation {
          id
          websiteName
          websiteDescription {
              id
              websiteDescription
          }
          favicon180x180 {
              fixed {
                ...GatsbyContentfulFixed_noBase64
              }
            }
          }
        }
    `}
    render={data => {
        const pageUrl = page ? data.site.siteMetadata.siteUrl + "/" + page : data.site.siteMetadata.siteUrl
        const metaDescription = description || data.contentfulWebsiteInformation.websiteDescription.websiteDescription
        const metaTitle = title ? title + " | " + data.contentfulWebsiteInformation.websiteName : data.contentfulWebsiteInformation.websiteName
      return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{metaTitle}</title>

          <meta name="description" content={metaDescription} />
          <meta name="theme-color" content={variable.SiteColor}/>
          <meta itemProp="name" content={metaTitle} />
          <meta itemProp="description" content={metaDescription} />

          <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
          <link rel="preconnect" href="https://maps.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://maps.gstatic.com/" crossorigin />
          <link rel="preconnect" href="https://cloud.google.com/" crossorigin />
          <link rel="preconnect" href="https://developers.google.com/" crossorigin />

          <link rel="mask-icon" href={Safari} color={variable.SiteColor}/>

          <meta name="msapplication-TileColor" content={variable.SiteColor}/>
          <meta name="msapplication-TileImage" content={Tile}/>
          <meta name="msapplication-config" content="/browserconfig.xml"/>

          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={"https:" + data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta property="og:site_name" content={metaTitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={"https:" + data.contentfulWebsiteInformation.favicon180x180.fixed.src} />
          <meta name="twitter:image:src" content={"https:" + data.contentfulWebsiteInformation.favicon180x180.fixed.src}/>

          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content={variable.SiteColor}/>
        </Helmet>
      );
    }}
  />
);

Helmett.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default Helmett;
