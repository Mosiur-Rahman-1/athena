import React from 'react';
import './Hero.css';
import heroImage from '../../../Images/Illustration/hero-image.png';

const Hero = () => {
    return (
        <div className = "container">
            <section className = "row mt-5 align-items-center">
                <div className = "col-lg-6 col-md-12 col-sm">
                    <h1 className= "text-left pb-3 hero-font">Florence agency</h1>
                    <p className= "text-left paragraph-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className = "text-left pt-3">
                        <button className = "btn-modify">See Pricing</button>
                    </div>
                </div>
                
                <div className = "col-lg-6 col-md-12 col-sm mt-5">
                    <img src={heroImage} className= "img-fluid image-tablet-padding" alt="Hero image"/>
                </div>
            </section>
            
        </div>
    );
};

export default Hero;