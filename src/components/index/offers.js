import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import NotFound from 'src/images/notfound.jpg'
import Card from 'src/components/offer-card'
import { Link } from "gatsby"

const Offers = ({AllOffers}) => {
  return (
    <Section>
        <Header id="Offers">Featured Coupons and Offers</Header>
        <Smalltext>Terms and conditions apply</Smalltext>
        <Container>
        {AllOffers.edges.map(({ node }) => (
            <Card
            key={node.contentful_id}
            offerTitle={node.title}
            Id={node.contentful_id}
            Image={node.offerCard.thumbnail ?
            node.offerCard.thumbnail.fixed.src
            :
            NotFound
            }
            Titlee={node.offerCard ?
            node.offerCard.title
            :
            node.title
            }
            SubTitlee={node.offerCard.subTitle ?
            node.offerCard.subTitle
            :
            ""
            }
            ExpirationDate={node.expirationDate ?
            node.expirationDate
            :
            "Missing Date"
            }
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

const Section = styled.section``
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
    margin-top: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
    transform: scale(1,1.18);
    letter-spacing: -1px;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.8rem;
    justify-content: center;
`

const OfferContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 0.8rem;
  ${OffersBtn} {
    margin-bottom: auto;
    transition: all 285ms linear;
    color:  ${variable.SiteColor};
    text-decoration: unset;
    border: 1px solid;
    padding: 0.3rem 0.7rem;
    &:hover {
      background-color: ${variable.SiteColor};
      color: white;
    }
  }
`