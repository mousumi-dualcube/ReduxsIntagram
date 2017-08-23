function comments(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_COMMENTS' :
      console.log("Incrementing comments!!");
      return state
    default:
      return state
  }
}

export default comments
