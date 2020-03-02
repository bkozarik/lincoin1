import React from 'react';
import './App.css';
import {IndexRoute } from 'react-router'
import {Route, BrowserRouter} from "react-router-dom";
import Main from './Components/Main.js';
import Login from './Components/Login.js';
import Register from './Components/Register.js';
import Prices from './Components/Prices.js';
import Head from './Components/Head.js';
import Footer from './Components/Footer.js';









function App() {
  return (
    <BrowserRouter>
        
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route exact path="/" component={Main}/>
        <Footer/>
    </BrowserRouter>
  );
}




export default App;
