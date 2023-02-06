import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData_Category } from '../Actions/actions'
import { Link } from 'react-router-dom';

const Category = () => {
   const {id} = useParams()
  const dispatch = useDispatch();
  const { data_category, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData_Category());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <ul>
      {data_category.map((item) => (
        <Link to={`/categories/${item._id}`}><li key={item.id}>{item.title}</li></Link>
      ))}
    </ul>
  );
};

export default Category;
