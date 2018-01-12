import { combineReducers } from 'redux';
import photosReducer from './photos';
import setUser from './setUser';

const allReducers = combineReducers({
  photos: photosReducer, 
  user: setUser
});

export default allReducers;