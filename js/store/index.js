
import { combineReducers } from 'redux';

import app from './app/reducer';
import navigation from './navigation/reducer';

export default combineReducers({
  app,
  navigation,
});
