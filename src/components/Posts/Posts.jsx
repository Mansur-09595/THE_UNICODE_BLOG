import { useParams } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchData_Posts } from '../Actions/actions'
import Post from "./Post";
import './posts.css'

const Posts = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { data_posts, isLoading_posts, error_posts } = useSelector((state) => state)
  const filterPosts = data_posts.filter(
    (state) => state.categoryId === "63dfea8be3ff10b4c4e0ae3f"
  );

  useEffect(() => {
    dispatch(fetchData_Posts(id));
  }, [dispatch, id]);

  if (isLoading_posts) {
    return <div><ThreeCircles height="100" width="100" color="#4fa94d" wrapperStyle={{}} wrapperClass="" 
    visible={true} ariaLabel="three-circles-rotating" outerCircleColor="" innerCircleColor="" middleCircleColor="" /></div>;
  }

  if (error_posts) {
    return <div>{error_posts}</div>;
  }

  function getHeader() {
    switch (window.location.pathname) {
      case '/categories/63dfeda8e3ff10b4c4e0ae41':
        return 'Проекты студентов';
      case '/categories/63dfe985e3ff10b4c4e0ae3a':
        return 'Буткемп';
      case '/categories/63dfea8be3ff10b4c4e0ae3f':
        return 'Новости IT';
      default:
        return '';
    }
  }

  return (
    <>
    <div className="h2-flex">
      <h2>{getHeader()}</h2>
      <h2>Рекомендуем к прочтению</h2>
    </div>
    <div className="blocks-category">
    <ul>
      {data_posts.filter((item)=> item.categoryId === id).map((item) => (
        <Post item={item}/>
      ))}
    </ul>
    <div>
    {filterPosts.slice(0, 2).map((recomend) => {
      return (
        <div>
        <Link to={`/categories/id/${recomend._id}`}>
          <img className="recomend-img" src={recomend.image} alt={recomend.title} />
        </Link>
        <p key={recomend.id}>
          {recomend.title.length > 13
            ? `${recomend.title.substring(0, 13)}...`
            : recomend.title}
        </p>
      </div>
      )})}
  </div>
  </div>
  </>
  );
};

export default Posts;

{/* <ul>
      {data_posts.map((item) => {
        
          console.log(item._id === id)
        if (item._id === id) {
          return <li key={item.id}>{item.title}</li>;
        }
      })}
    </ul> */}
