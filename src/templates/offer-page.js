import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import * as variable from 'src/config.js'
import {darken} from 'polished'

export default ({ data }) => {
  const dataa = data.contentfulOffer
  function heyPrint() {
    window.print()
}
  return (
    <Layout>
      <OfferContainer>
        <GetOffer>Get this offer</GetOffer>
        <PrintContainer>
          <PrintBtn onClick={heyPrint}>Print</PrintBtn>
        </PrintContainer>
      </OfferContainer>
      <PrintContent>
        <Coupon>
          <Top>
            <LogoContainer>
              <Logo>{data.contentfulWebsiteInformation.websiteName}</Logo>
            </LogoContainer>
          </Top>
          <Title>{dataa.title}</Title>
          <Code>{data.contentfulOffer.contentful_id}</Code>
          <Expires>
            <Expiration>Valid Only {data.contentfulOffer.createdAt} - {data.contentfulOffer.expirationDate}</Expiration>
          </Expires>
          <Tos>Participating stores only. Most vehicles. No cash value. Void where prohibited. Not combinable with other offers. Not valid on prior purchase or rain checks. Shop supply fee of 7% of labor cost (up to $25) added to invoices over $35, include cost and profit, and is not charged if prohibited. Other restrictions, fees, and taxes may apply. See or Call store for details.</Tos>
        </Coupon>
      </PrintContent>
    </Layout>
  )
}
export const query = graphql`
query($id: String!) {
    contentfulOffer(contentful_id: {eq: $id}) {
      title
      contentful_id
      createdAt(formatString: "MMMM Do")
      expirationDate(formatString: "MMMM Do, YYYY")
      description {
        description
      }
    }
    contentfulWebsiteInformation {
      websiteName
    }
  }
`

const Expires = styled.div``
const Code = styled.div``
const Title = styled.div``
const Expiration = styled.p``
const LogoContainer = styled.div``
const Logo = styled.div``
const Top = styled.div``
const Tos = styled.div``
const GetOffer = styled.div``
const PrintContainer = styled.div``
const PrintBtn = styled.button``
const Coupon = styled.div``

const PrintContent = styled.div`
margin: 2rem 1.5rem;
margin-top: 1.5rem;
display: flex;
justify-content: center;
${Coupon} {
  border: 3px dashed #000;
  margin: 0 auto;
  max-width: 35rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${Top} {
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.12), inset 0 -1px 0 0 #dadce0;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    ${LogoContainer} {
      max-width: 960px;
      position: relative;
      text-decoration: none;
      padding: 0.55rem 1.0875rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &::before {
        content: "";
        transform: skew(-19deg, 0deg);
        background-color: ${variable.SiteColor};
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 2px;
        transition: background-color 250ms ease-in-out;
      }
      &:hover {
        &::before {
          background-color: ${darken(0.2, variable.SiteColor)};
        }
      }
      ${Logo} {
        color: white;
        margin: unset;
        z-index: 1;
        position: relative;
        font-size: 1.65rem;
        font-family: "Racing Sans One";
        white-space: nowrap;
      }
    }
  }
  ${Title} {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  ${Code} {
    align-self: center;
    display: -webkit-inline-box;
    background-color: #e2e2e2;
    color: #5f5f5f;
    padding: 5px 10px;
    font-size: 0.8rem;
    border-radius: 3px;
  }
  ${Expires} {
    ${Expiration} {
      font-size: 0.5rem;
      font-weight: bold;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: unset;
      color: grey;
    }
  }
  ${Tos} {
    color: grey;
    font-size: 0.4rem;
    margin: 0 0.6rem;
    margin-bottom: 0.6rem;
    margin-top: 0.5rem;
  }
}
@media screen and (max-width: 633px) {
  ${Coupon} {
    ${Top} {
      ${LogoContainer} {
        ${Logo} {
          font-size: 1.55rem;
        }
      }
    }
    ${Title} {
      font-size: 1.5rem;
    }
  }
}
@media screen and (max-width: 590px) {
  ${Coupon} {
    ${Top} {
      ${LogoContainer} {
        ${Logo} {
          font-size: 1.45rem;
        }
      }
    }
    ${Title} {
      font-size: 1.4rem;
    }
  }
}
@media screen and (max-width: 515px) {
  ${Coupon} {
    ${Top} {
      ${LogoContainer} {
        ${Logo} {
          font-size: 1.35rem;
        }
      }
    }
    ${Title} {
      font-size: 1.3rem;
    }
  }
}
@media screen and (max-width: 450px) {
  ${Coupon} {
    ${Top} {
      ${LogoContainer} {
        ${Logo} {
          font-size: 1.25rem;
        }
      }
    }
    ${Title} {
      font-size: 1.2rem;
    }
    ${Code} {
      font-size: 0.6rem;
    }
    ${Expires} {
      ${Expiration} {
        font-size: 0.4rem;
      }
    }
    ${Tos} {
      font-size: 0.3rem
    }
  }
}
@media screen and (max-width: 382px) {
  ${Coupon} {
    ${Top} {
      ${LogoContainer} {
        ${Logo} {
          font-size: 1.15rem;
        }
      }
    }
    ${Title} {
      font-size: 1.1rem;
    }
  }
}
`
const OfferContainer = styled.div`
display: flex;
margin-top: 1.1rem;
margin-left: 1.5rem;
flex-wrap: wrap;
  ${GetOffer} {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    margin-right: 18px;
  }
  ${PrintContainer} {
    align-self: center;
    margin-right: 1.5rem;
    ${PrintBtn} {
      color: #fff;
      background-color: ${variable.SiteColor};
      border: unset;
      padding: 7px 13px;
      border-radius: 3px;
      display: block;
      &:active,
      &:focus,
      &:hover {
        outline: unset;
        background-color: ${darken(0.19, variable.SiteColor)};
      }
    }
  }
`