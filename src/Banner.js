import React from 'react';
import './css/Banner.css'

const Banner = () => {
    return (
        <div className="banner-main">
            <div className="banner">
                <h1 className="heading">
                    We're Here To Help
                </h1>
                <h3>Going through any issues on our platform? Don't hesitate to leave a message. Help us get better.</h3>
                <img src="/images.jpg" alt="customer Care" className="banner_img" width="auto" height="300"></img>
            </div>
            
        </div>
    )
}

export default Banner;
