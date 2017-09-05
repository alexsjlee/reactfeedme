import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tweetsReducer from './tweetsReducer';

export default combineReducers({
  form: formReducer,
  tweets: tweetsReducer,
  queryTerm: tweetsReducer
})