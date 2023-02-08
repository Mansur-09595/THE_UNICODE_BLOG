import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './posts.css'

const AboutPost = () => {
  const {id} = useParams()
  const selectedPost = useSelector((state) => state.data_posts).find(item => item._id === id)
  console.log(selectedPost)

  return (
    <ul>
      <img src={selectedPost.image} alt={selectedPost.title} />
      <li>{selectedPost.title}</li>
      <li>{selectedPost.text}</li>
    </ul>
  );
};

export default AboutPost;
{/* <ul>
      {data_posts.map((item) => {
        
          console.log(item._id === id)
        if (item._id === id) {
          return <li key={item.id}>{item.title}</li>;
        }
      })}
    </ul> */}