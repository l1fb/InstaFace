const initializeFeed = data => {
  return {
    type: 'INITIALIZE_FEED', 
    payload: data
  };
}; 

export default initializeFeed;
