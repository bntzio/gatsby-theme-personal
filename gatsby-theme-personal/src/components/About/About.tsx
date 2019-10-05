import React from 'react'
import styled from '@emotion/styled'

export default () => (
  <Container>
    <About>
      <h4>Hi, I'm Enrique</h4>
      <p>I’m a digital artist, creator and software engineer focusing on TypeScript, Node.js and Go.</p>
      <br />
      <p>I also write about the JavaScript world and open source software.</p>
    </About>
    <Subscribe>
      <form>
        <input type="email" placeholder="Your email address" />
        <button>Join now</button>
      </form>
    </Subscribe>
  </Container>
)

const Container = styled.section`
  margin-top: 14rem;
  width: 52rem;
`

const About = styled.div`
  h4 {
    font-size: 3.2rem;
    color: #111;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2.2rem;
    color: #404040;
    line-height: 3.1rem;
  }
`

const Subscribe = styled.div`
  margin-top: 4rem;

  form {
    input {
      width: 70%;
      height: 4.5rem;
      background: #f2f6f9;
      color: #454646;
      font-size: 1.8rem;
      border: none;
      padding-left: 1.2rem;
      outline: none;
    }
    button {
      width: 30%;
      height: 4.5rem;
      background: #4187d3;
      color: white;
      font-size: 1.8rem;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`
