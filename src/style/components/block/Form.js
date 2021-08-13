/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const formStyle = css`
  display: grid;
  grid-template-rows: 150px 40px 60px 25px;
  align-items: center;

  .submitButton {
    text-align: center;
  }

  .errorMsg {
    text-align: center;
    font-size: 12px;
    color: red;
  }
`