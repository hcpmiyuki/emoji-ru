export async function fetchTweetEmojized(tweet, emojiLevel=3) {
  const response = await fetch(
    `http://0.0.0.0:8080/emojize?tweet=${tweet}&emoji_level=${emojiLevel}`
  );
  const data = await response.json();

  return data.result;
}
