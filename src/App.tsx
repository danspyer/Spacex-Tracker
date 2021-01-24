import React from 'react';
import './App.css';
import { Navigation, NavigationV2 } from './Nav-Bar/Nav'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="Background">
        <NavigationV2></NavigationV2>
      </div>
    </div>
  );
}

export default App;
