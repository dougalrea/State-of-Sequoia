import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/common/Nav'
import './App.css';
import Home from './components/common/Home';

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Switch>
        <Route exact path="/"/>
        <Route path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
