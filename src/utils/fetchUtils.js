export const fetchWingsData = async (uriEndPoint) => {
  try {
    const apiBaseUrl = process.env.REACT_APP_WINGS_API_URL;
    const apiPort = process.env.REACT_APP_BE_PORT;
    const requestUri = `${apiBaseUrl}:${apiPort}/${uriEndPoint}`;

    const response = await fetch(requestUri);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch guild data:", error);
    // dispatch({ type: "SET_ERROR", payload: error });
  }
};
