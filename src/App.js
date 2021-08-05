import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {useEffect } from 'react';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from './screens/ProfileScreen';
import {auth} from './screens/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {logout , login, selectUser} from './features/userSlice';
// React router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  /* a pushing mechanism to the LoginScreen,
   it renders and goes to LoginScreen if the user is null*/
  const user=useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else{
        dispatch(logout);
      }
    });

    return unsubscribe;
  },[]);
  return (
    <div className="app">
     <Router>
       
       {!user? (<LoginScreen />):
       (<Switch>
         <Route path='/profile'>
           <ProfileScreen />
         </Route>
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
