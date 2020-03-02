import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Head = props => {
  return (
   
    <div className="head" id="head">
         <div className="container">
             <div className="head__content">
         <div className="logo">
          <img src="./img/logo-head.png"></img>
        </div>
        <nav>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/">Price</NavLink></li>
                <li><NavLink to="/">Training</NavLink></li>
            </ul>
            </nav>
                <div className="header__right">
                <NavLink className="reg__btn" to="Register">Register</NavLink>
                <NavLink className="login__btn" to="Login">Login</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
}   


export default Head;