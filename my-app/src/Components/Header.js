import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery'

const Header = props => {
  return (
    <section id="header__section">
      <div className="hader-bg">
      <div className="container">
      <header>
        <div className="logo">
          <img src="./img/logo-white.png"></img>
        </div>

        <div className="header__right">
        <NavLink className="reg__btn" to="Register">Register</NavLink>
        <NavLink className="login__btn" to="Login">Login</NavLink>
        </div>

        <div id="mobile__nav">
          <div className="nav__item"></div>
          <div className="nav__item"></div>
        </div>
      </header>
      
        <div className="head__content">
          <div className="head__left">
            <h1>Make money easy!</h1>
            <p>Attract people to Linkcoin.com and get to 10$ of their payments for life. You can build a real business - your profit will be $10 000  per month, if you can invite a lot of people.They will bring you money every month. This is infinite earnings</p>
            <div className="head__total">
              <p>already paid over</p><span> $ 364,700</span>
            </div>
              <a href="#" className="gradient__btn">Start now</a>
          </div>

          <div className="head__right">
            <div className="img__3d">
              <img className="main__3d wow" src="./img/3d-img/main-cloud.png"></img>
              <img src="./img/3d-img/main-laptop.png"></img>
              <img src="./img/3d-img/main-phone.png"></img>
              <img src="./img/3d-img/main-tab.png"></img>
            </div>
          </div>
        </div>
          <div className="benefits">
            <div className="benefits__item">
              <img src="./img/benefits-1.png"></img>
              <p>easy</p>
            </div>

            <div className="benefits__item">
              <img src="./img/benefits-2.png"></img>
              <p>safely</p>
            </div>

            <div className="benefits__item">
              <img src="./img/benefits-3.png"></img>
              <p>fast</p>
            </div>
          </div>
          </div>
          <img className="grad__line header__line" src="/img/gradient-line.png"></img> 
          </div>
    </section>
  );
}

export default Header;
