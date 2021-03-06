import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components'
import * as variable from 'src/config.js'

const Facebook = ({ Username }) => {
    return (
      <Icon href={"https://facebook.com/" + Username} rel="noopener noreferrer" target="_blank" title="Follow us on Facebook!">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"></path>
        </svg>
      </Icon>
  )
}

const Instagram = ({ Username }) => {
  return (
    <Icon href={"https://instagram.com/" + Username} rel="noopener noreferrer" target="_blank" title="Follow us on Instagram!">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path>
      </svg>
    </Icon>
)
}
  

const AnnouncementComponent = () => (
  <StaticQuery
    query={graphql`
        query {
            contentfulWebsiteInformation {
                announcement {
                    announcement
                    json
                }
                shopInformation {
                  address
                  phoneNumber
                  instagramUsername
                  facebookUsername
              }
            }
        }
    `}
    render={dataa => {
        //const announcementJson = dataa.contentfulWebsiteInformation.announcement.json.content

        /*Creates a rich text document
        const richTextDocument = {
            nodeType: 'document',
            data: {},
            content: [
                ...announcementJson //adds the content to the document
            ]
        };*/
      return (
        <InfoBar>
            <Ad>
              <a href="https://g.page/Cylinder-Head-Exchange-Shop?share" target="_blank" rel="noopener noreferrer">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve">
                  <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z"></path>
                </svg>{dataa.contentfulWebsiteInformation.shopInformation.address}
              </a>
            </Ad>
            <Right>
              <p>Follow Us</p> 
              <Social>
                  <Instagram
                    Username="CylinderHeadExchangeShop"
                  />
                  <Facebook
                    Username="CylinderHeadExchangeShop"
                  />
              </Social>
            </Right>
         </InfoBar>
      );
    }}
  />
);

export default AnnouncementComponent;

const Phone = styled.a``
const Right = styled.div``
const Ad = styled.div``
const Social = styled.div``
const Icon = styled.a``

const InfoBar = styled.div`
  background-color: #fff;
  display: flex;
  z-index: 5;
  position: relative;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 6px 1rem;
  ${Ad} {
    align-self: center;
    word-break: keep-all;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    width: 100%;
    text-transform: uppercase;
    line-height: 87%;
    overflow-y: hidden;
    color: #999;
    font-size: 13px;
    font-weight: 600;
    a {
      color: inherit;
      &:hover {
        color: ${variable.SiteColor};
        svg {
          path {
            fill: ${variable.SiteColor};
          }
        }
      }
    }
    svg {
      height: 11px;
      width: 11px;
      margin-right: 4px;
      path {
        fill: #999;
      }
    }
    p {
        margin: unset;
    }
    B {
      font-size: 25px;
      font-weight: 900;
      color: ${variable.SiteColor};
    }
  }
  ${Right} {
    position: relative;
    padding-right: 0;
    white-space: nowrap;
    color: #999;
    font-size: 13px;
    font-weight: 600;
    display: flex;
     p {
       margin: unset;
       align-self: center;
     }
    ${Social} {
      display: flex;
      margin-left: 6px;
      ${Icon} {
        width: 28px;
        height: 28px;
        margin-left: 2px;
        border-radius: 50%;
        background-color: white;
        display: flex;
        justify-content: center;
        transition: all 250ms linear;
        margin-left: 4px;
        background-color: #fff;
        svg {
          height: 50%;
          width: 50%;
          align-self: center;
          fill: #c3c3c3;
          path {
            fill: #c3c3c3;
          }
        }
        &:hover {
          background-color: ${variable.SiteColor};
          svg {
            fill: #fff;
            path {
              fill: #fff;
            }
          }
        }
      }
    }
    ${Phone} {
      display: flex;
      align-items: center;
      text-decoration: unset;
      color: #000;
      font-weight: bold;
      &:hover {
        color: ${variable.SiteColor};
        svg {
          fill: ${variable.SiteColor};
        }
      }
      svg {
        height: 16px;
        width: 16px;
        fill: #000;
        margin-right: 8px;
      }
    }
  }
  @media screen and (max-width: 798px) {
    justify-content: center;
    ${Ad} {
      display: none;
    }
    ${Right} {
    }
  }
`