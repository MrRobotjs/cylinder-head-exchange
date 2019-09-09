import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is going to be the Offers Page</h1>
    <p>This page will display all coupons.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
