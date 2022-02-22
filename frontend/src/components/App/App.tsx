import React from 'react';
import CarList from '../CarList/CarList';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import './App.scss';

function App():JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Hero header="Franky Cars"/>
      <CarList/>
    </div>
  );
}

export default App;
