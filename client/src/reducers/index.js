import { combineReducers } from 'redux';
import photosReducer from './photos';

const allReducers = combineReducers({
  photos: photosReducer
});

export default allReducers;