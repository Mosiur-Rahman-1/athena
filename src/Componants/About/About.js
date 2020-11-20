import React from 'react';
import aboutImage from '../../Images/Illustration/20 [Converted]@2x.png'

const About = () => {
    return (
        <div className = "container" >
            <section className = "row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm">
                    <img src={aboutImage} className = "img-fluid pr-5" alt=""/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm about-text-container">
                <h1 className= "text-left pb-3 hero-font">Stay Running & Project</h1>
                    <p className= "text-left paragraph-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <div className = "text-left pt-3">
                        <button className = "btn-modify">Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;