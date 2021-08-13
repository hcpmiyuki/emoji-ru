/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react'

const globalStyle = `
  *{
    padding: 0;
    margin: 0;
  }
`

function GlobalStyle () {
  return (
    <div>
      <Global styles={globalStyle} />
    </div>
  )
}

export default GlobalStyle