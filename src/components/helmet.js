import React from 'react';
import Helmet from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Favicon180 from '../images/Favicon180.png'
import Safari from '../images/safari-pinned-tab.svg'
import Tile from '../images/mstile-144x144.png'
import * as variable from 'src/config.js'

const Helmett = ({ title, description }) => (
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
        <Helmet htmlAttributes={{ lang: 'en' }} titleTemplate={"%s | " + data.contentfulWebsiteInformation.websiteName}>
          <meta charSet="utf-8" />
          <title>{title}</title>

          <meta name="description" content={metaDescription} />
          <meta name="theme-color" content={variable.SiteColor}/>
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={metaDescription} />

          <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
          <link rel="preconnect" href="https://maps.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://maps.gstatic.com/" crossorigin />
          <link rel="preconnect" href="https://cloud.google.com/" crossorigin />
          <link rel="preconnect" href="https://developers.google.com/" crossorigin />

          <link rel="mask-icon" href={Safari} color={variable.SiteColor}/>

          <meta name="msapplication-TileColor" content="#2b5797"/>
          <meta name="msapplication-TileImage" content={Tile}/>
          <meta name="msapplication-config" content="/browserconfig.xml"/>

          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:image" content={Favicon180} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={Favicon180} />
          <meta name="twitter:image:src" content={Favicon180}/>

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
