import Button from '../../atoms/Button.js'

function TweetButton(props) {
  const emoji_ruUrl = encodeURIComponent('http://localhost:3000/');
  const tweetEmojized = encodeURIComponent(props.tweetEmojized ? props.tweetEmojized : 'えもじ〜るでぶっきらぼうなツイートを駆逐しよう🌟');
  const hashtags = 'えもじ〜る';
  // Twitter用のurl作成
  const twitterUrl = 'https://twitter.com/intent/tweet?text=' + tweetEmojized + '&hashtags=' + hashtags + '&url=' + emoji_ruUrl;

  function handleClick() {
    window.open(twitterUrl, '_blank');
  }

  return (
    <Button
      onClick={() => handleClick()}
      buttonLabel='ツイートする'
      bgColor='#00acee'
      color='white'
      fontSize='10px'
    />
  );
}

export default TweetButton;