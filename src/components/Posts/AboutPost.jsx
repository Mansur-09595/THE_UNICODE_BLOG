import { ThreeCircles } from 'react-loader-spinner';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchData_Posts } from '../Actions/actions';
import './aboutpost.css'

const AboutPost = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { data_posts, isLoading_posts, error_posts } = useSelector((state) => state)
  const filterPost = data_posts.find((item) => item._id === id)

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

  return (
    <div className='about-post-blocks'>
          {filterPost ? (
            <div>
              <img className='about-post-img' src={filterPost.image} alt={filterPost.title} />
              <p className='about-post-title' key={filterPost.id}>{filterPost.title}</p>
              <p className='about-post-text'>{filterPost.text}</p>
            </div>
          ) : (
            <div>Post not found</div>
          )}
    </div>
  );
};

export default AboutPost;
