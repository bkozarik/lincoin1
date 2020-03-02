import React from 'react';
import '../App.css';

const Prices = props => {
  return (
    <section>
        <div className="prices">
            <div className="container">
            <img className="grad__line" src="./img/gradient-line.png"></img>
            <div className="prices__content">
            <h2>Our Prices</h2>

            <div className="prices__list">

                <div className="price__item">

                    <div className="sale sale__first"><span>50%OFF first month</span></div>

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <div className="prev__price"><p>$29.99</p><span>/mo</span></div>
                    <p className="total__price">$15.99/mo</p>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>

                <div className="price__item">

                    

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <p className="prev__price"></p>
                    <p className="total__price">$15.99<span>/mo</span></p>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>

                <div className="price__item">

                    <div className="sale"><span>BEST DEAL</span></div>

                    <img src="./img/Price-img-1.png" alt=""/>
                    <p>1 month</p>
                    <p className="prev__price"></p>
                    <p className="total__price">$15.99/mo</p>
                    <a href="#" className="gradient__btn">select plan</a>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Prices;
