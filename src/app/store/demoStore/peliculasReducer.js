const initialState = {
    Movies: [],
    Series: [],
    Juan: []
};

const initialState2 = {
    Authorization: {
      validToken: true
    }
};

const moviesReducer = (state = initialState2, action = {}) => {
  switch (action.type) {
    case "MOVIES":
      return { ...state, Movies: action.value };
    case "SERIES":
      return { ...state, Series: action.value };
    default:
      return state;
  }
};

export default moviesReducer;