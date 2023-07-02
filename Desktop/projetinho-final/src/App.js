import React from 'react';
import axios from 'axios'; 
import './App.css';
import Home from './Home';

import HeaderPokedex from './componets/HeaderPokedex';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        
      </header>
      <body className="App-body">
        <HeaderPokedex/>
       
      </body>
    </div>
  );
}

export default App;
