import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import Card from 'src/components/offer-card'
import { Link } from "gatsby"
import { darken } from 'polished'

const Offers = ({AllOffers}) => {
  return (
    <Section id="Offers">
        <Header>Featured Coupons and Offers</Header>
        <Smalltext>Terms and conditions apply</Smalltext>
        <Container>
        </Container>
        <Container>
        {AllOffers.edges.map(({ node }) => (
            <Card
            key={node.contentful_id}
            id={node.contentful_id}
            cardTitle={node.offerCard ?
            node.offerCard.title
            :
            node.title
            }
            titlee={node.title}
            type={node.type}
            />
        ))}
        </Container>
        <OfferContainer>
          <OffersBtn to="/offers/">View All Offers</OffersBtn>
        </OfferContainer>
    </Section>
  )
}

export default Offers

const Section = styled.section`
padding-top: 1.5rem;
margin-bottom: 1rem;
`
const OffersBtn = styled(Link)``

const Smalltext = styled.p`
    text-align: center;
    color: #a2a2a2;
    font-size: 0.6rem;
    text-transform: lowercase;
`

const Header = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 0 1rem;
    margin-top: unset;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    transform: scale(1,1.18);
    letter-spacing: -1px;
    font-weight: 900;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5rem;
    justify-content: center;
`

const OfferContainer = styled.div`
display: flex;
justify-content: center;
  ${OffersBtn} {
    margin-bottom: auto;
    color: #fff;
    background-color: ${variable.SiteColor};
    border-radius: ${variable.BtnBorderRadius};
    text-decoration: unset;
    background-size: 135px 1px;
    font-size: 0.85rem;
    padding: 8px 17px;
    transition: all 230ms ease-in-out;
    box-shadow: 0px 2px 10px -3px ${variable.SiteColor};
    &:hover {
      background-color: ${darken(0.15, variable.SiteColor)};
      box-shadow: 0px 2px 10px -1px ${darken(0.18, variable.SiteColor)};
    }
  }
`