import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import HELMET from "../components/helmet"
import Card from '../components/offer-card-2'
import NotFound from '../images/notfound.jpg'
import {graphql } from "gatsby"

export default ({ data }) => (
  <Layout BackgroundColor="#f3f3f3">
    <HELMET title="Offers & Coupons" />
    <Header>All Offers ({data.allContentfulOffer.totalCount})</Header>
    <OffersContainer>
      {data.allContentfulOffer.edges.map(({ node }) => (
        <Card
        Id={node.contentful_id}
        key={node.contentful_id}
        offerTitle={node.title}
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
        ExpirationDate={node.expirationDate ?
          node.expirationDate
        :
          "Missing Date"
        }
        />
      ))}
    </OffersContainer>
  </Layout>
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