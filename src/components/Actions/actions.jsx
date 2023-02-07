const fetchData_Category = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_CATEGORY_START" });
    try {
      const res = await fetch("https://unicode-blog.onrender.com/categories");
      const data = await res.json();
      dispatch({ type: "FETCH_DATA_CATEGORY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_CATEGORY_ERROR", payload: error });
    }
  };
};

const fetchData_Posts = (categoryId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_POSTS_START" });
    try {
      const res = await fetch(`https://unicode-blog.onrender.com/posts?categoryId=${categoryId}`);
      const data = await res.json();
      const randomPosts = data.sort(() => Math.random() - 0.5);
      dispatch({ type: "FETCH_DATA_POSTS_SUCCESS", payload: randomPosts });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_POSTS_ERROR", payload: error });
    }
  };
}

export {fetchData_Category, fetchData_Posts};
