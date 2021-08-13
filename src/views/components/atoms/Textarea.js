/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Textarea(props) {
  const textarea = css`
    width: ${ props.width };
    borderRadius: 4px;
    resize: none;
    font-size: 16px;
  `

  return (
    <textarea
      css={textarea}
      name={props.name}
      maxLength={props.maxLength}
      rows={props.rows}
      placeholder={props.placeholder}
    >
    </textarea>
  );
}

export default Textarea;