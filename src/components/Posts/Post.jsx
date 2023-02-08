import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './posts.css'

const Post = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const handleReadMore = () => {
    setExpanded(!expanded);
  };
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
    <div className='items-blocks'>
      <Link to={item._id}>
        <img className="item-img" src={item.image} alt={item.title} />
      </Link>
        <div className='item-info'>
          <p c key={item._id}>{item.title}</p>
          <p> 
            {expanded ? item.text : item.text.slice(0, 16) + "..."}
            {!expanded && (
            <a className="read-more" onClick={handleReadMore}>
              {expanded ? "Read Less" : "read more"}
            </a>
              )}
          </p>
        </div>
    </div>
  );
};

export default Post;
