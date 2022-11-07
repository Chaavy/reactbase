const initialState = {
    Movies: [],
    Series: []
};

const moviesReducer = (state = initialState, action = {}) => {
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