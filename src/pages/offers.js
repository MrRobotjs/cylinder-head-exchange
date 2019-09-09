import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/offer-card-2'
import Oil from '../images/oil_change.jpg'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <OffersContainer>
      <Card 
      Image={Oil}
      Titlee="This is an Offer Title"
      />
      <Card 
      Image={Oil}
      Titlee="$10 Off Pennzoil® High Mileage or Synthetic Blend Oil Change"
      />
      <Card 
      Image={Oil}
      Titlee="This is another Offer title with more words"/>
      <Card 
      Image={Oil}
      Titlee="This is another Offer title with more words"/>
      <Card 
      Image={Oil}
      Titlee="This is another Offer title with more words"/>
      <Card 
      Image={Oil}
      Titlee="This is another Offer title with more words"/>
    </OffersContainer>
  </Layout>
)

export default SecondPage

const OffersContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 0.8rem;
justify-content: center;
`