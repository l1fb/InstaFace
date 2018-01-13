const searchTag = data => {
  return {
    type: 'SEARCH_BY_TAG', 
    payload: data
  };
}; 

export default searchTag;
