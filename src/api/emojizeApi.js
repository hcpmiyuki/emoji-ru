export async function fetchTweetEmojized(tweet, emojiLevel = 3) {
  const requestUrl = `${process.env.REACT_APP_API_ORIGIN}emojize?tweet=${tweet}&emoji_level=${emojiLevel}`;
  const response = await fetch(requestUrl);
  const data = await response.json();
  
  return data.result;
}
