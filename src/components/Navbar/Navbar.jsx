import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import navbar from "../images/logo.png";
import '../Category/category.css'

const Navbar = () => {
  const { data_category, isLoading, error } = useSelector((state) => state);
  
  if (isLoading) {
    return (
      <div>
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="navbar">
        <Link to={`/`}>
            <img className="navbar-img" src={navbar} />
        </Link>
      </div>
      <div className="categories">
        {data_category.map((item) => (
          <Link to={`/categories/${item._id}`}>
            <p className="category" key={item.id}>
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <hr class="hr-line" />
    </>
  );
};

export default Navbar;
