export const initialState = {
  rosterData: null,
  error: null,
  isLoading: true,
};

export const rosterReducer = (state, action) => {
  switch (action.type) {
    case "SET_ROSTER_DATA":
      return { ...state, rosterData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
};
