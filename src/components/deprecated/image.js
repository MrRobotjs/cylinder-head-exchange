/*
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{ height: '100'}} alt="Hero"/>
}

export default Image
*/