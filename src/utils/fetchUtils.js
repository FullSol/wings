export const fetchWingsData = async (uriEndPoint) => {
  try {
    const apiBaseUrl = process.env.REACT_APP_WINGS_API_URL;
    const requestUri = `${apiBaseUrl}/${uriEndPoint}`;

    const response = await fetch(requestUri);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch guild data:", error);
  }
};
