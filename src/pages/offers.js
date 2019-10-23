import React from "react"
import styled from 'styled-components'
import HELMET from "../components/helmet"
import Card from '../components/offer-card-2'
import {graphql } from "gatsby"

export default ({ data }) => (
  <>
    <HELMET title="Offers & Coupons" />
    <Header>All Offers ({data.allContentfulOffer.totalCount})</Header>
    <OffersContainer>
      {data.allContentfulOffer.edges.map(({ node }) => (
        <Card
        key={node.contentful_id}
        id={node.contentful_id}
        expire={node.expirationDate}
        cardTitle={node.offerCard ?
        node.offerCard.title
        :
        node.title
        }
        titlee={node.title}
        type={node.type}
        />
      ))}
    </OffersContainer>
  </>
)

export const query = graphql`
  query {
    allContentfulOffer {
      totalCount
      edges {
        node {
          title
          createdAt
          expirationDate(formatString: "MMMM Do, YYYY")
          type
          offerCard {
            title
          }
          contentful_id
        }
      }
    }
  }
`

const OffersContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 0.8rem;
justify-content: center;
`

const Header = styled.h1`
  display: block;
  text-align: center;
  margin: 2rem 1rem;
  margin-top: unset;
  padding-top: 1rem;
`
