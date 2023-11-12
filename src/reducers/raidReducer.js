export const initialState = {
  raidData: null,
  isLoading: true,
  error: null,
};

export const raidReducer = (state, action) => {
  switch (action.type) {
    case "SET_RAID_DATA":
      return { ...state, raidData: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error();
  }
};
