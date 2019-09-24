import React from 'react'
import styled from 'styled-components';
import * as variable from 'src/config'
import NotFound from 'src/images/notfound.jpg'
import Card from 'src/components/offer-card'
import { StaticQuery, graphql } from "gatsby"

const mobileHeader = (AllOffers) => (
    <StaticQuery
    query={graphql`
      query {
        All: allContentfulOffer(limit: 6) {
            totalCount
            edges {
              node {
                title
                createdAt
                expirationDate(formatString: "MMMM Do, YYYY")
                offerCard {
                  title
                  subTitle
                  thumbnail {
                    fixed {
                      src
                    }
                  }
                }
                contentful_id
              }
            }
        }
      }
    `}
    render={data => (
    <>
        <Header id="Offers">Featured Coupons and Offers</Header>
        <Smalltext>TERMS AND CONDITIONS APPLY</Smalltext>
        <Container>
        {data.All.edges.map(({ node }) => (
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
    </>
)}
/>
);

export default mobileHeader

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