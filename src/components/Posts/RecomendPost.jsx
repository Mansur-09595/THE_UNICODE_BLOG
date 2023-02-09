import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './posts.css'

const RecomendPost = ({ recomend }) => {
  const [expanded, setExpanded] = useState(false);
  const handleReadMore = () => {
    setExpanded(!expanded);
  };
 
  return (
    <>
    <div>
        <Link to={`/categories/id/${recomend._id}`}>
          <img className="recomend-img" src={recomend.image} alt={recomend.title} />
        </Link>
        <div className='recomend-info'>
          <p className='recomend-untitle' key={recomend._id}>{recomend.title.length > 13 ? `${recomend.title.substring(0, 13)}...` : recomend.title}</p>
          <p className='recomend-text'> 
            {expanded ? recomend.text : recomend.text.slice(0, 180) + "..."}
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

export default RecomendPost;
