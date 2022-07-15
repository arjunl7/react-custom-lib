/** @jsxImportSource @emotion/react */

import React, { ReactNode } from 'react'
import * as C from './Text.styled'

export interface TextProps {
    children: ReactNode
}

const Text = (props: TextProps) => {
  return (
    <p css={C.Text}>{props.children}</p>
  )
}

export default Text