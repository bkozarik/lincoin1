import React from 'react';
import '../App.css';

const HowItWorks = props => {
  return (
    <section id="how">
        <div className="container">
        <div className="how__top">
            <h2>How it works?</h2>
            <p>
                Earn money by attracting new customers. Get a unique link in your personal account and share it with your friends, familiar, relatives, family. <br/><br/>
                For each attracted client you will receive $ 0. With the first trial month for $14.99 you will go plus after 2 customers! You can easily withdraw funds to VISA/MASTERCARD. <br/><br/>
                If the client whom you brought renew his subscription, you will also receive $10. You will receive $10 from each invited customer while he renews the subscription. You can have hundreds and thousands of invited users! 
            </p>
            <span>Make your passive income stable!</span>
        </div> 

        <div className="roadmap">

            <div className="road__item">
                <img src="./img/road-1.png"></img>
                <div className="item__number">
                    <span>1</span>
                </div>
                <div className="road__text">
                    <span>Subscribe</span>
                    <p>Register and apply for a trial month for only $14.99</p>
                </div>
            </div>

            <div className="road__item">
                <img src="./img/road-2.png"></img>
                <div className="item__number">
                    <span>2</span>
                </div>
                <div className="road__text">
                    <span>Get a unique link</span>
                    <p>Log in and then in your personal account get access to a unique link where you can invite customers</p>
                </div>
            </div>

            <div className="road__item">
                <img src="./img/road-3.png"></img>
                <div className="item__number">
                    <span>3</span>
                </div>
                <div className="road__text">
                    <span>Lead by customer link</span>
                    <p>Share the link with your friends and relatives. When the customer clicks on your link and subscribes, you will receive $10. You will receive $10 from each client with each renewal of the subscription. you can have hundreds and thousands of invited customers</p>
                </div>
            </div>

            <div className="road__item">
                <img src="./img/road-4.png"></img>
                <div className="item__number">
                    <span>4</span>
                </div>
                <div className="road__text">
                    <span>Get money</span>
                    <p>Easily withdraw earned money to VISA and MASTERCARD cards in minutes</p>
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default HowItWorks;
