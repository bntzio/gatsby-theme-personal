import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

export default () => (
  <Container>
    <Link to="/">About</Link>
    <Link to="/">Contact</Link>
    <Link to="/">Products</Link>
    <Link to="/">Articles</Link>
    <Link to="/">Now</Link>
    <Link to="/">Journal</Link>
    <Link to="/">Books</Link>
  </Container>
)

const Container = styled.nav`
  display: flex;
  margin-top: 4rem;

  a {
    font-weight: 500;
    font-size: 1.5rem;
    color: hsla(0, 0%, 7%, 0.4);
    margin-right: 2.5rem;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: hsla(0, 0%, 7%, 0.6);
    }
  }
`
