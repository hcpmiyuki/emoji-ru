import Button from '../../atoms/Button.js'
import CopyToClipBoard from 'react-copy-to-clipboard';

function ClipButton(props) {
  return (
    <CopyToClipBoard
      text={props.tweetEmojized}
      onCopy={() => alert(`コピーしました！`)}
    >
    <Button
      onClick={() => { }}
      buttonLabel='コピーする'
      bgColor='#76B947'
      color='white'
      fontSize='10px'
      />
    </CopyToClipBoard>
  );
}

export default ClipButton;