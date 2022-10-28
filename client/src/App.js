import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Home from './components/Home'
import DetailDog from './components/DetailDog';
import CreateRace from './components/CreateRace'
function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path = '/' component={Landing}/>
      <Route path = '/home' component={Home}/>
      <Route path= '/detailDog/:id' component={DetailDog} />
      <Route path= '/CreateRace' component={CreateRace}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
