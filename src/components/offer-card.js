import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import Ripples from 'react-ripples'
import * as variable from 'src/config' 
import { darken } from 'polished'

const Header = ({ Image }) => (
    <Card>
        <Url to="/page-2"></Url>
        <Left style={{backgroundImage: `url(${Image})`}}>
        </Left>
        <Right>
        <Title>$10 Off Pennzoil® High Mileage or Synthetic Blend Oil Change </Title>
        Test
        </Right>
    </Card>
)

export default Header

const Title = styled.div``
const Url = styled(Link)``
const Left = styled.div``
const Right = styled.div``

const Card = styled.div`
    flex-basis: 18rem;
    border: 1px solid #eee;
    display: flex;
    margin-right: 0.8rem;
    margin-left: 0.8rem;
    margin-bottom: 1rem;
    height: 17rem;
    border: 2px #000 dashed;
    position: relative;
    ${Url} {
      width: 100%;
      height: 100%;
      z-index: 1;
      position: absolute;
    }
    ${Left} {
      background-color: red;
      width: 12rem;
      height: 100%;
      position: relative;
      background-position: center;
      background-size: cover;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
      }
    }
    ${Right} {
      width: 100%;
      padding: 10px;
      ${Title} {
        text-align: center;
        font-weight: bold;
        font-size: 1.3rem;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
    }
`