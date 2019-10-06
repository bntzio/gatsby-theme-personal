import React from 'react'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

import Header from './../Header'
import Global from './Layout.Global'

export default ({ children }: any) => (
  <Global>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Enrique Benitez - Software Developer</title>
    </Helmet>
    <Layout>
      <Header />
      <Main>{children}</Main>
    </Layout>
  </Global>
)

const Layout = styled.div`
  display: block;
  margin: 0 auto;
  width: 90vw;
  max-width: 1000px;
  margin-bottom: 10rem;
`

const Main = styled.main`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu;
  margin-top: 10rem;
`
