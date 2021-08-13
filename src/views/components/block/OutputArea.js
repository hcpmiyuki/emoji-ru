/** @jsxImportSource @emotion/react */
import { outputStyle } from '../../../style/components/block/OutputArea'
import ShareButton from '../module/ShareButton/ShareButton';

function OutputArea(props) {
  return (
    <div css={outputStyle}>
      <div className='textArea'>
        <p>{props.tweetEmojized}</p>      
      </div>
      <p className='msg'>
        結果が微妙な場合は何度か試してみてください🙏
      </p>
      <ShareButton
        tweetEmojized={props.tweetEmojized}
      />
    </div>
  );
}

export default OutputArea;