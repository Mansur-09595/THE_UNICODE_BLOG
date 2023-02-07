import React from 'react';
import { Link } from "react-router-dom";

const Post = ({ item }) => {
  return (
    <p>
        <Link to={item._id}>
            <li key={item._id}>{item.title}</li>
        </Link>
    </p>
  );
};

export default Post;
