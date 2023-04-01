const initialState = {
    validToken: false
};

const authorizationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTHORIZATION_VALID_TOKEN":
    return { ...state, validToken: action.value };
    default:
      return state;
  }
};

export default authorizationReducer;