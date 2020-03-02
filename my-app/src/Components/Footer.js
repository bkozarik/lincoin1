import React from 'react';
import '../App.css';

const Footer = props => {
  return (
    <footer id="footer">
        <div className="footer__logo">
            <img src="./img/logo-color.png" alt=""/>
        </div>
        <p className="copy">Copyright ©2020 linkcoin.com</p>

        <div className="footer__nav">                   
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Agreement</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;
