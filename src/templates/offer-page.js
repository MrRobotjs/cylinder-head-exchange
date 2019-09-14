import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const dataa = data.contentfulOffer
  return (
    <Layout>
      <div>
        <h1>{dataa.title}</h1>
      </div>
    </Layout>
  )
}
export const query = graphql`
query($id: String!) {
    contentfulOffer(contentful_id: {eq: $id}) {
        title
        contentful_id
      }
  }
`