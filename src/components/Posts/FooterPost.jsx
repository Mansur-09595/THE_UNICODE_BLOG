import React from 'react';
import { Link } from "react-router-dom";
import './posts.css'

const FooterPost = ({ recomend_footer }) => {
   return (
    <>
    <Link to={`/categories/id/${recomend_footer._id}`}>
      <div className="recomend_footer-img" src={recomend_footer.image} alt={recomend_footer.title} style={{ backgroundImage: `url(${recomend_footer.image})` }} >
        <div className="recomend_footers-padding">
          <p className="recomend_footer-title" key={recomend_footer.id}>{recomend_footer.title}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

export default FooterPost;
