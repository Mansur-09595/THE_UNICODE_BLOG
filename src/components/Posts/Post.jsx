import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './posts.css'

const Post = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const handleReadMore = () => {
    setExpanded(!expanded);
  };
 
  return (
    <>
    <div className='items-blocks'>
      <Link to={item._id}>
        <img className="item-img" src={item.image} alt={item.title} />
      </Link>
        <div className='item-info'>
          <p className='item-title' key={item._id}>{item.title}</p>
          <p className='item-text'> 
            {expanded ? item.text : item.text.slice(0, 180) + "..."}
            {!expanded && (
            <a className="read-more" onClick={handleReadMore}>
              {expanded ? "Read Less" : "read more"}
            </a>
              )}
          </p>
        </div>
    </div>
    <hr class="hr-line-items" />
    </>
  );
};

export default Post;
