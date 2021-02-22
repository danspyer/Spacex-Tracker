import React from 'react';
import { Navbar } from './Components/Navigation/Navbar'
import { NextLaunchLogic } from './Components/Home/NextLaunchLogic'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// Import bootstrap before custom CSS so that our css overrides bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Components/Home/NextLaunch.css';

 // Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div className="Background flexbox">
        <Navbar/>

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
