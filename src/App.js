import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Path from '../src/components/Path';
import Nav from '../src/components/Nav/Nav';
import { MyProvider } from './components/Context';

function App() {
  return (
    <MyProvider>
    <Router>
    <Nav/>
    <Path/>
    </Router>
    </MyProvider>
  );
}

export default App;
