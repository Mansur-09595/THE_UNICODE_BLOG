import React from "react";
import { Link } from "react-router-dom";
import "./news.css";

const CategorySelected = ({post, data_posts}) => {
  return (
    <div className="post-block" style={ data_posts[0]._id === post._id
        ? { width: "700px", height: "660px" } : {} && data_posts[2]._id === post._id
        ? { marginTop: "-338px" }: {} 
        }>
    <Link to={`/categories/id/${post._id}`}>
      <div className="post-img" src={post.image} alt={post.title} style={{ backgroundImage: `url(${post.image})` }} >
        <div className="posts-padding">
          <p className="post-title" key={post.id}>
            {post.title}
          </p>
          <p className="post-text"> 
            {post.text.length > 13 ? `${post.text.substring(0, 13)}...` : post.text}
          </p>
        </div>
      </div>
    </Link>
  </div>
  );
};

export default CategorySelected;