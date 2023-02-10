import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./news.css";

const News = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="news-block">
      <Link to={`/categories/id/${news._id}`}>
        <img className="news-img" src={news.image} alt={news.title} />
      </Link>
      <p className="news-title" key={news.id}>
        {news.title}
      </p>
      <p className="news-text">
        {expanded ? news.text : news.text.slice(0, 16) + "..."}
        {!expanded && (
          <a className="read-more" onClick={handleReadMore}>
            {expanded ? "Read Less" : "read more"}
          </a>
        )}
      </p>
    </div>
  );
};

export default News;
