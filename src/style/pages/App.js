/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const appStyle = css`
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding: 0 5%;
  background-color: #e0ffff;

  .grid {
    display: grid;
    grid-gap: 3rem;
  }

  .loadView{
    position: fixed;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`