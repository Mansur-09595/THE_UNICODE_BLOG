import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' 
        element={<Category />}/>
        <Route path='/categories/:id' 
        element={<Posts />}/>
     </Routes>
    </div>
  );
}

export default App;
