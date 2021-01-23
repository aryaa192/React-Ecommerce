import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import React, { useEffect } from 'react';
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider'
function App() {

  useEffect(() => { 
    // will only run once when the app component loads.
    auth.onAuthStateChanged(authUser => {
      console.log('The User is logged in.',authUser);
      if(authUser) {
        // the user is logged in.
        dispatchEvent( {
          type: 'SET_USER',
          user:authUser
        })
      } else {
        // the user is logged out.
        dispatchEvent({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/login">
      {/* Header Component*/}
      <Login />
      {/* Home/Body Component*/}
      {/* Footer Component*/}
    </Route>
    <Route path="/checkout">
      {/* Header Component*/}
      <Header />
      <Checkout />
      {/* Home/Body Component*/}
      {/* Footer Component*/}
    </Route>
    <Route path="/">
      {/* Header Component*/}
      <Header />
      {/* Home/Body Component*/}
      <Home />
      {/* Footer Component*/}
    </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
