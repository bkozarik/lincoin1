import React from 'react';
import '../App.css';

const Pros = props => {
  return (
    <section>
       <div className="pros">
           <div className="container">
            <h2>Pros of working with us:</h2>

            <div className="pros__content">
                <div className="pros__list">

                    <div className="pros__item">
                        <img src="./img/pros-1.png" alt=""/>
                        <p>50% discount for the first month</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-2.png" alt=""/>
                        <p>$10 for each client</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-3.png" alt=""/>
                        <p>Stable earnings</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-4.png" alt=""/>
                        <p>Instant withdrawal of funds</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-5.png" alt=""/>
                        <p>Our service has no analogues</p>
                    </div>



                    <div className="pros__item">
                        <img src="./img/pros-6.png" alt=""/>
                        <p>Develop marketing skills</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-7.png" alt=""/>
                        <p>Payback after your 2nd client</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-8.png" alt=""/>
                        <p>Service works all over the world</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-9.png" alt=""/>
                        <p>Enter the top 5 best and get a bonus</p>
                    </div>

                    <div className="pros__item">
                        <img src="./img/pros-10.png" alt=""/>
                        <p>Analyze your actions in your account</p>
                    </div>

                </div>
            </div>

            <img className="grad__line" src="./img/gradient-line.png"></img>

            <a href="#" className="gradient__btn">Get started</a>
       </div>
       </div>
    </section>
  );
}

export default Pros;
