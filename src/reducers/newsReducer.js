export const initialState = {
  newsData: null,
  error: null,
  isLoading: true,
};

export const newsReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEWS_DATA":
      return { ...state, newsData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
};
