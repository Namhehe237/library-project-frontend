import React from 'react';
import './App.css';
import { Carousel } from './layouts/HomePage/Carousel';
import { ExploreTopBook } from './layouts/HomePage/ExploreTopBook';
import { NavBar } from './layouts/navbarAndFooter/NavBar';

function App() {
  return (
      <div>
        <NavBar/>
        <ExploreTopBook/>
        <Carousel/>
      </div>
  );
}

export default App;
