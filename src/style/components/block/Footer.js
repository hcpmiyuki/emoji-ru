/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const footerStyle = css`
  text-align: center;
  padding-top: 90px;
  padding-bottom: 10px;
  ul {
    li {
      display: inline-block;
      padding: 10px;
      color: gray;
      a {
        text-decoration: none;
        &:visited,&:link {
          color: gray;
        }
      }
    }
  }
`