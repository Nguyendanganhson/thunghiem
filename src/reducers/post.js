const initalPost = [];
export const postReducer = (state = initalPost, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};
