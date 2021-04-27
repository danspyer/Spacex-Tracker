import {useEffect, useState} from 'react';
import { Navbar } from './Components/Navigation/Navbar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom'
import {Vehicle} from './Components/Vehicles/Falcon1'
import { NextLaunchLogic } from './Components/Home/NextLaunchLogic'

import {Landing} from './Components/Landing/Landing'
// Import bootstrap before custom CSS so that our css overrides bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Components/Home/NextLaunch.css';

 // Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Background flexbox">
          <Navbar/>
          <QueryClientProvider client={queryClient}>
            <div className="Content">
            <Landing/>
            </div>
          </QueryClientProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
