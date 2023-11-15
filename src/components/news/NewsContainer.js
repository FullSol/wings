import React, { useReducer, useEffect } from "react";
import { newsReducer, initialState } from "../../reducers/newsReducer";
import NewsLayout from "./NewsLayout";
import Loading from "../loading/Loading";
import { fetchWingsData } from "../../utils/fetchUtils";

const NewsContainer = () => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch data from wings api
        const data = await fetchWingsData("api/news");

        // Dispatch to the news reducer
        dispatch({ type: "SET_NEWS_DATA", payload: data });
      } catch (error) {
        console.error("Failed to fetch guild data:", error);

        // Dispatch to the news reducer
        dispatch({ type: "SET_ERROR", payload: error });
      }
    };

    loadData();
  }, []);

  // If newsData is not yet loaded, render a loading indicator
  if (state.isLoading) {
    return <Loading />;
  }

  return <NewsLayout newsData={state.newsData} />;
};

export default NewsContainer;
