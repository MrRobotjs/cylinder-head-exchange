import React from 'react';
import Helmet from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmett = ({ theme = {}, title }) => (
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
            }
        }
    `}
    render={data => {
      const { contentful } = data.contentfulWebsiteInformation;

      return (
        <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{title} - {contentful.websiteName}</title>
          <meta name="description" content={contentful.websiteDescription.websiteDescription} />
          <link rel="shortcut icon" href="" />
          <meta name="theme-color" content=""/>
          <meta name="image" content="" />
          <meta itemProp="name" content={title + "-" + contentful.websiteName} />
          <meta itemProp="description" content={contentful.websiteDescription.websiteDescription} />
          <meta itemProp="image" content="" />
          <meta name="og:title" content={title + "-" + contentful.websiteName} />
          <meta name="og:description" content={contentful.websiteDescription.websiteDescription} />
          <meta name="og:image" content="" />
          <meta name="og:site_name" content={title + "-" + contentful.websiteName} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title + "-" + contentful.websiteName} />
          <meta name="twitter:description" content={contentful.websiteDescription.websiteDescription} />
          <meta name="twitter:image" content="bigicon" />
          <meta
            name="twitter:image:src"
            content=""
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href=""
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href=""
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