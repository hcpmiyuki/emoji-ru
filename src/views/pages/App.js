/** @jsxImportSource @emotion/react */
import { appStyle } from '../../style/pages/App';

import Header from '../components/block/Header';
import Footer from '../components/block/Footer';
import Form from '../components/block/Form/Form';
import OutputArea from '../components/block/OutputArea';
import Loading from '../components/atoms/Loading';

import { fetchTweetEmojized } from '../../api/emojizeApi'

import { useState } from "react";

function App() {
  const tweetEmojizedDefault = 'あじけない文章😹は絵文字😝で駆逐してやるっっ‼💦';
  const [tweetEmojized, setTweetEmojized] = useState(tweetEmojizedDefault);
  const [emojiLevel, setEmojiLevel] = useState('3');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true)
    const tweet = event.target.elements.tweet.value;
    const emojiLevel = event.target.elements.emojiLevel.value;

    if (!tweet) {
      setErrorMsg('ツイートが入力されていません😢');
      setTweetEmojized(tweetEmojizedDefault);
      return;
    }

    fetchTweetEmojized(tweet, emojiLevel)
      .then((tweetEmojized) => {
        setErrorMsg('');
        setTweetEmojized(tweetEmojized);
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg('失敗してしまいました...ツイートの内容を変えてもう一度お試しください😢');
        setTweetEmojized(tweetEmojizedDefault);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // ラジオボタンのvalueの管理
  function onChangeRadioButton(event) {
    const emojiLevelSelected = event.target.value;
    setEmojiLevel(emojiLevelSelected);
  }
  
  return (
    <div css={appStyle}>
      {
        loading &&
        <div className='loadView'>
          <Loading />
        </div>
      }
      
      <Header />
      <div className='grid'>
        <Form
          onSubmit={(e) => handleSubmit(e)}
          onChange={(e) => onChangeRadioButton(e)}
          emojiLevel={emojiLevel}
          errorMsg={errorMsg}
        />
        {tweetEmojized &&
        <OutputArea
          tweetEmojized={tweetEmojized}
        />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
