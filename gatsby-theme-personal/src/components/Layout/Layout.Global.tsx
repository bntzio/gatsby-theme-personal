import React from 'react'
import { Global, css } from '@emotion/core'

import { minireset } from './styles'

export default ({ children }: any) => (
  <React.Fragment>
    <Global
      styles={css`
        * {
          font-size: 10px;
        }
        ${minireset}
      `}
    />
    {children}
  </React.Fragment>
)
