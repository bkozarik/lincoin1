import React from 'react';
import '../App.css';
import HeadStable from './HeadStable.js';

const Login = props => {
  return (
   <div>
      <HeadStable/>
    <div className="login">
      <div className="login__content">
        <div className="login__left">
          <h2>Login</h2>
          <img src="/img/login-img.png" alt=""/>
        </div>

        <div className="login__right">
          <form action="">
            <div className="inputs">
              <p className="pActive">username</p><img src="/img/sign-1.png" alt=""/><input className="inputActive" type="text" placeholder="username" required/>
              <p className="pActive">password</p><img src="/img/sign-2.png" alt=""/><input className="inputActive" type="text" placeholder="password" required/>
            </div>

            <div className="chekdiv">
            <label className="container1">Agree with Terms
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>
            </div>
            <button>Login</button>

          </form>
          <div className="sign">
            <a href="">Don’t have an account? <b>Click here</b></a>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default Login;
