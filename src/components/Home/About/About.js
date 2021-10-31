import React from 'react';
import aboutimg from '../../../Asset/images/aboutimg.jpg'
import './About.css';

const About = () => {
    return (
        <div className="bgc">
        <section className="container">
        <div className="row">
        <div className="col-md-6 mt-5   d-flex justify-content-center">
                <img  style ={{height:"400px"}}className="img-fluid rounded-pill" src={aboutimg} alt="..." />
            </div>


            <div className="col-md-6 mt-5  d-flex justify-content-center align-items-center">
                <div className="w-50">
                    <h5>About Our Company</h5>
                    <h3>How We Can Help you</h3>
                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem</p>                  
                </div>
            </div>
             </div>
    </section>
    </div>
    );
};

export default About;