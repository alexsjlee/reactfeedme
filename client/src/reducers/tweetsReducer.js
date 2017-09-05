import { FETCH_TWEETS, QUERY_TERM } from '../actions/types';

const DEFAULT_STATE = {
  tweets: [],
  queryTerm: ''
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload };
    case QUERY_TERM:
      return {...state, queryTerm: action.payload};
    default:
      return { ...state };
  }
}
