import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './components/common/LandingPage'
import Home from './components/common/Home'
import Nav from './components/common/Nav'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
