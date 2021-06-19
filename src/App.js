import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
// React router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  /* a pushing mechanism to the LoginScreen,
   it renders and goes to LoginScreen if the user is null*/
  const user=null;
  return (
    <div className="app">
     <Router>
       
       {!user? (<LoginScreen />):
       (<Switch>
        {/*exact is to not render other paths, 
        it will only render the omw page*/}
          <Route exact path="/"> 
          <HomeScreen />
          </Route>
        </Switch>
        )}
    </Router>
    </div> 
  );
}

export default App;
