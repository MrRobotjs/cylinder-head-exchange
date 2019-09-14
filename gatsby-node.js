const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const _ = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
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
    `)

    result.data.allContentfulOffer.edges.forEach(({ node }) => {
        createPage({
          path: "/offers/offer/" + _.kebabCase(node.title) + "-" + node.contentful_id,
          component: path.resolve(`./src/templates/offer-page.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            id: node.contentful_id,
          },
        })
      })

  }

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }