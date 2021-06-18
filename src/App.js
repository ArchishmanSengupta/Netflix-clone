import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./HomeScreen";
// React router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
     

     <Router>
        <Switch>
          <Route path="/">
          <HomeScreen />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
