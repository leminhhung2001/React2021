const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};

// reducer phải trả về gía trị bất kì !== 'undefinded'
export default postsReducer;

// không được mutate state ở trong reducers
// bad!
// VD: state[0] = 'Sam'
// state.pop()
// state.push()
// state.name = 'Same'
// state.age = 30
