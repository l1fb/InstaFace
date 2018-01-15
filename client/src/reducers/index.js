import { combineReducers } from 'redux';
import photosReducer from './photos';
import activePhotoReducer from './activePhoto';
import setUser from './setUser';

const allReducers = combineReducers({
  photos: photosReducer, 
  user: setUser,
  activePhoto: activePhotoReducer
});

export default allReducers;