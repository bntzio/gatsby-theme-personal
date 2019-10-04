import React from 'react'
import styled from '@emotion/styled'

import Header from './../Header'
import Global from './Layout.Global'

export default ({ children }: any) => (
  <Global>
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
`

const Main = styled.main``
