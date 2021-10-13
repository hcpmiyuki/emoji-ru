/** @jsxImportSource @emotion/react */
import { footerStyle } from '../../../style/components/block/Footer'

function Footer() {
  return (
    <div css={footerStyle}>
      <ul>
        <li>©2021 <a href='https://www.hcp834.com'>hcp834.com</a></li>
        <li><a href='https://twitter.com/i_was_hcp' target='_blank' rel='noreferrer'><i className="fab fa-twitter"></i>i_was_hcp</a></li>
      </ul> 
    </div>
  );
}

export default Footer;