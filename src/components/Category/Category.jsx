import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData_Category, fetchData_Posts } from "../Actions/actions";
import { ThreeCircles } from "react-loader-spinner";
import News from "./News";
import "./category.css";
import CategorySelected from "./CategorySelected";

const Category = () => {
  const dispatch = useDispatch();
  const { data_posts, isLoading_posts, error_posts } = useSelector(
    (state) => state
  );
  const filterNews = data_posts.filter(
    (state) => state.categoryId === "63dfea8be3ff10b4c4e0ae3f"
  );

  useEffect(() => {
    dispatch(fetchData_Category());
    dispatch(fetchData_Posts());
  }, [dispatch]);

  if (isLoading_posts) {
    return (
      <div>
        <ThreeCircles height="100"  width="100" color="#4fa94d" wrapperStyle={{}} wrapperClass="" visible={true}
          ariaLabel="three-circles-rotating" outerCircleColor=""  innerCircleColor="" middleCircleColor="" />
      </div>
    );
  }

  if (error_posts) {
    return <div>{error_posts}</div>;
  }

  return (
    <div className="wrapper">
      
      <div className="post-blocks">
        {data_posts.slice(0, 3).map((post) => {
          return (
            <CategorySelected post={post} data_posts={data_posts} />
          );
        })}
      </div>
      <hr class="hr-line" />
      <h1 className="last-news">Последние новости в мире IT</h1>
      <div className="news-blocks">
        {filterNews.slice(0, 2).map((news) => {
          return (
          <News news={news} />
          )})}
      </div>
    </div>
  );
};

export default Category;
