/** @jsxImportSource @emotion/react */
import { shareButtonStyle } from '../../../../style/components/module/ShareButton'
import TweetButton from './TweetButton';
import ClipButton from './ClipButton';

function ShareButton(props) {
  return (
    <ul css={shareButtonStyle}>
      <li>
        <TweetButton
          tweetEmojized={props.tweetEmojized}
        />
      </li>
      <li>
        <ClipButton
          tweetEmojized={props.tweetEmojized}
        />
      </li>
    </ul>
  );
}

export default ShareButton;