export const fetchWingsData = async (uriEndPoint) => {
  try {
    // Pull base url from environment variables
    const apiBaseUrl = process.env.REACT_APP_WINGS_API_URL;

    // Construct the request uri
    const requestUri = `${apiBaseUrl}/${uriEndPoint}`;

    // Await the data from the appropriate server
    const response = await fetch(requestUri);

    // Convert ino json
    const data = await response.json();

    // Return json data back to the calling function
    return data;
  } catch (error) {
    // In case f error throw for the caller to handle
    throw new Error("Failed to fetch guild data:", error);
  }
};
