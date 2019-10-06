/* eslint-disable max-len */
import React from 'react'

interface Props {
  left?: boolean
  right?: boolean
}

export default ({ left }: Props) =>
  left ? (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ) : (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
