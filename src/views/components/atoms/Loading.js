/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import loadingGif from '../../../images/loading.gif'

function Loading() {
  const loading = css`
    position: relative;
    width: 150px;
    background-color: rgba(255, 255, 255, 0.9);
    height: 150px;
    border-radius: 10px;

    img,a{
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      top: 40%;
      width: 70%;
    }

    a {
      top: 55%;
      font-family: Kosugi Maru, sans-serif;
      font-size: 15px;
      font-weight: bold;
      color: gray;
    }
  `

  return (
    <div css={loading}>
      <img src={loadingGif} alt="loading" />
      <a>Loading</a>
    </div>
  );
}

export default Loading;