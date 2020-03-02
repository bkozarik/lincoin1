import React from 'react';
import '../App.css';
import Header from './Header.js';
import Head from './Head.js';
import HowItWorks from './HowItWorks.js';
import Pros from './Pros.js';
import Leaders from './Leaders.js';
import Prices from './Prices.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Register from './Register.js';
import {Route, BrowserRouter} from "react-router-dom";


const Main = props => {
    return (
        <React.Fragment>

            <Head/>
            <Header/>
            <HowItWorks/>
            <Pros/>
            <Leaders/>
            <Prices/>
            

        </React.Fragment>
    );
}   

window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    var BlkStyle = document.getElementById('head').style;
    if(html.scrollTop>760||body.scrollTop>760) {
        BlkStyle.display="flex";
    } 
    else BlkStyle.height=BlkStyle.display="none";
   }


export default Main;


