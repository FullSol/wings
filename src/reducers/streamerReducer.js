export const initialState = {
  streamerData: null,
  isLoading: true,
  error: null,
};
export const streamerReducer = (state, action) => {
  switch (action.type) {
    case "SET_STREAMER_DATA":
      return { ...state, streamerData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
};
