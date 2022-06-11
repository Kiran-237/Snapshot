import './App.css';
import Search from "./components/search/Search";
import React from 'react';
import Heading from './components/Heading';

function App() {
  return (
    <div className="App">
      <Heading/> 
      <Search />
    </div>
  )
}

export default App;
