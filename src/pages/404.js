import React from "react"
import HELMET from "../components/helmet"
import styled from 'styled-components'

const NotFoundPage = () => (
  <>
    <HELMET title="404: Not found" />
    <Container>
      <h1>404 NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
)

export default NotFoundPage

const Container = styled.div`
  text-align: center;
  margin-top: auto;
  padding-top: 2rem;
`