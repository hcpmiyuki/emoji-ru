/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Button(props) {
  const button = css`
    background-color: ${props.bgColor};
    color: ${props.color};
    border: 1px solid ${props.bgColor};
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    cursor: pointer;
    font-family: Kosugi Maru, sans-serif;
    font-weight: bold;
    font-size: ${props.fontSize};
    &:active {
      border-bottom: solid 2px ${props.bgColor};
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
    }
  `

  return (
    <button css={button} onClick={() => props.onClick()}>
      {props.buttonLabel ? props.buttonLabel : 'ボタン'}
    </button>
  );
}

export default Button;