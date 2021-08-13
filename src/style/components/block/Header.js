/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import backgroundImage from '../../../images/emoji-ru_logo_maho.PNG'

export const headerStyle = css`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 220px;
  
  @media (min-width: 768px) {
    height: 300px;
  }
`