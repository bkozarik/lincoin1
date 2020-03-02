import React from 'react';
import '../App.css';
import HeadStable from './HeadStable.js';


const Register = props => {
  return (
    <div>
      <HeadStable/>
      <div className="reg">
        <div className="reg__content">
          <div className="reg__left">
            <h2>Register</h2>
            <img src="/img/reg-img.png" alt=""/>
          </div>

          <div className="reg__right">
            <form action="">
              <div className="inputs">
                <p className="pActive">username</p><img src="/img/sign-1.png" alt=""/><input className="inputActive" type="text" placeholder="username" required/>
                <p className="pActive">password</p><img src="/img/sign-2.png" alt=""/><input className="inputActive" type="text" placeholder="password" required/>
                <p className="pActive">repeat password</p><img src="/img/sign-2.png" alt=""/><input className="inputActive" type="text" placeholder="repeat password" required/>
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
              <a href="">Already have an account? <b>Click here</b></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Register;