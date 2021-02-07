import React from 'react';
import './App.css';
import { Navbar } from './Components/Navigation/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import './Components/Home/NextLaunch.css';

import { NextLaunchLogic } from './Components/Home/NextLaunchLogic'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

 // Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div className="Background flexbox">
        <Navbar></Navbar>

        <QueryClientProvider client={queryClient}>
          <div className="Content">
            <NextLaunchLogic/>
          </div>
        </QueryClientProvider>
          
      </div>
    </div>
  );
}

export default App;
