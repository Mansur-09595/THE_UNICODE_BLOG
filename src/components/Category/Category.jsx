import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData_Category, fetchData_Posts } from '../Actions/actions'
import { Link } from 'react-router-dom';
import navbar from '../images/logo.png'
import './category.css'

const Category = () => {
  const dispatch = useDispatch();
  const { data_category, isLoading, error } = useSelector((state) => state);
  const { data_posts, isLoading_posts, error_posts } = useSelector((state) => state)
  const filterNews = data_posts.filter(state => state.categoryId === "63dfea8be3ff10b4c4e0ae3f");

  useEffect(() => {
    dispatch(fetchData_Category());
    dispatch(fetchData_Posts());
  }, [dispatch]);

  if (isLoading && isLoading_posts) {
    return <div>Loading...</div>;
  }

  if (error && error_posts) {
    return <div>{error && error_posts}</div>;
  }
  return (
    <div className='wrapper'>
      <div className='navbar'>
        <img className='navbar-img' src={navbar} />
      </div>
      <ul>
        {data_category.map((item) => (
          <Link to={`/categories/${item._id}`}><li key={item.id}>{item.title}</li></Link>
        ))}
      </ul>
      <h2>Posts:</h2>
      <ul>
        {data_posts.slice(0, 3).map((post) => (
          <Link to={`/categories/id/${post._id}`}><li key={post.id}>{post.title}</li></Link>
        ))}
      </ul>
      <h2>Последние новости в мире IT</h2>
      <ul>
        {filterNews.map((news) => (
          <li key={news.id}>{news.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
