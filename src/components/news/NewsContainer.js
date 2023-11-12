import React, { useReducer, useEffect } from "react";
import { newsReducer, initialState } from "../../reducers/newsReducer";
import NewsLayout from "./NewsLayout";
import Loading from "../loading/Loading";

const NewsContainer = () => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { NewsInfo } = await import("../../data/newsInfo");
        dispatch({ type: "SET_NEWS_DATA", payload: NewsInfo });
      } catch (error) {
        console.error("Failed to fetch raid data:", error);
        dispatch({ type: "SEtT_ERROR", payload: error });
      }
    };
    fetchData();
  }, []);

  // If newData is not yet loaded, render a loading indicator
  if (state.isLoading) {
    return <Loading />;
  }

  return <NewsLayout newsData={state.newsData} />;
};

export default NewsContainer;
