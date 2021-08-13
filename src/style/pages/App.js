/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const appStyle = css`
  width: 90%;
  margin: 0 auto;
  padding: 0 5%;
  background-color: #e0ffff;
  .grid {
    display: grid;
    grid-gap: 3rem;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
`