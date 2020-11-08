import React from 'react';

import './style.css'

const Header = () => {
    return (
        <header className="hero">
            <div className="slide-imgs">
                <div className="bubbles">
                    <div id="bubble-img-1">
                        <img id="bubble-1" src="https://sync-advert.s3.ap-south-1.amazonaws.com/ball.jpg" alt="bouncing ball" />
                    </div>
                    <div id="bubble-img-2">
                        <img id="bubble-2" src="https://sync-advert.s3.ap-south-1.amazonaws.com/ball.jpg" alt="bouncing ball" />
                    </div>
                    <div id="bubble-img-3">
                        <img id="bubble-3" src="https://sync-advert.s3.ap-south-1.amazonaws.com/ball.jpg" alt="bouncing ball" />
                    </div>
                </div>
            </div>
            <div className="text-center infogram-content" id="container">
                <div id="inner">
                    <div className="infogram-content-1">
                        <p>WE ARE</p><br />
                        <h1 className="title">SYNCADVERT</h1>
                        <h1>FILMMAKERS</h1>
                        <h1 style={{letterSpacing: '6px'}}>PHOTOGRAPHERS</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;