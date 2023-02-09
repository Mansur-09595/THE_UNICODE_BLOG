import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import navbar from "../images/logo.png";
import { fetchData_Category } from "../Actions/actions";
import '../Category/category.css'

const Navbar = () => {
  const dispatch = useDispatch();
  const { data_category, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData_Category());
  }, [dispatch]);
  
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
          <NavLink to={`/categories/${item._id}`}>
            <a className="category" key={item.id}>
              {item.title}
            </a>
          </NavLink>
        ))}
      </div>
      <hr class="hr-line" />
    </>
  );
};

export default Navbar;
