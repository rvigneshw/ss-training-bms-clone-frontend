import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import AppRouter from './AppRouter';

function App() {

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
