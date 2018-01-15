const initialState = {
  faceRectangle: {},
  tagPrediction: 'Anonymous',
  photo_URL: ''
};

const activePhoto = (state = null, action) => {
  switch(action.type) {
    case "PHOTO_DROPPED":
      return action.payload;
      break;

    default: 
      return state;
      break;
  };

  return state;
};

export default activePhoto;