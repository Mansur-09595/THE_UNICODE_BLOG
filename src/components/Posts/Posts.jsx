import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData_Posts } from '../Actions/actions'
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { data_posts, isLoading_posts, error_posts } = useSelector((state) => state)

  useEffect(() => {
    dispatch(fetchData_Posts(id));
  }, [dispatch, id]);

  if (isLoading_posts) {
    return <div>Loading...</div>;
  }

  if (error_posts) {
    return <div>{error_posts}</div>;
  }
  return (
    <ul>
      {data_posts.filter((item)=> item.categoryId === id).map((item) => (
        <Post item={item}/>
      ))}
    </ul>
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
