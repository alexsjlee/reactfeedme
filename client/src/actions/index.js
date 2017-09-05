import axios from 'axios';
import { FETCH_TWEETS, QUERY_TERM } from './types';

const BASE_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://queryfeed.net/twitter?q=';

export const fetchTweets = queryTerm => async dispatch => {
  const req = await axios.get(`${BASE_URL}${queryTerm}`);

  dispatch({
    type: FETCH_TWEETS,
    payload: req.data.items
  });
};

export const queryTerm = values => {
  return {
    type: QUERY_TERM,
    payload: values
  };
};
