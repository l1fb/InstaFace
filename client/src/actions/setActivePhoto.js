const setActivePhoto = data => {
  return {
    type: 'PHOTO_DROPPED', 
    payload: data
  };
}; 

export default setActivePhoto;
