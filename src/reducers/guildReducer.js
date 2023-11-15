export const initialState = {
  guildData: null,
  isLoading: true,
  error: null,
};

export const guildReducer = (state, action) => {
  switch (action.type) {
    case "SET_GUILD_DATA":
      return { ...state, guildData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
};
