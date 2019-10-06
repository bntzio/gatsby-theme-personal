import React from 'react'
import styled from '@emotion/styled'

import Logo from './../Logo'
import { Moon, Link } from './../Icon'

export default () => (
  <Header>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Controls>
      <CopyLink>
        <Link />
      </CopyLink>
      <DarkMode>
        <Moon />
      </DarkMode>
    </Controls>
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
`

const LogoWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-right: 4rem;
`

const Controls = styled.div`
  display: flex;
`

const CopyLink = styled.div`
  display: flex;
  align-self: center;
  margin-right: 4rem;
`
const DarkMode = styled.div`
  display: flex;
  align-self: center;
`
