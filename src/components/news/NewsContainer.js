import React, { useState, useEffect } from "react";
import NewsLayout from "./NewsLayout";

const NewsContainer = () => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { NewsInfo } = await import("../../data/newsInfo");
        setNewsData({
          ...NewsInfo,
        });
      } catch (error) {
        console.error("Failed to fetch raid data:", error);
      }
    };
    fetchData();
  }, []);

  // If newData is not yet loaded, render a loading indicator
  if (!newsData) {
    return <div>Loading...</div>;
  }

  return <NewsLayout newsData={newsData} />;
};

export default NewsContainer;
