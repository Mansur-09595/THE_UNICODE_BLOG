import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Posts from './components/Posts/Posts';
import AboutPost from './components/Posts/AboutPost';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' 
        element={<Category />}/>
        <Route path='/categories/:id' 
        element={<Posts />}/>
        <Route path='/categories/:id/:id' 
        element={<AboutPost />}/>
     </Routes>
    </div>
  );
}

export default App;
