import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';

function App() {
  return (
  <>
  <GlobalStyle/>
  <Navbar/>
  <Hero/>
  </>
  );
}

export default App;
