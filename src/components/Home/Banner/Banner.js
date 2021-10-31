import React from 'react';
import "./Banner.css"
import Bannerimg from '../../../Asset/images/Banner.jpg'

const Banner = () => {
 
    return (
    
        <section className="header">
            <div className="row">

                <div className=" content col-md-6  d-flex justify-content-center align-items-center mb-5">
                    <div className="w-50">
                        <h1>  <br/>Hello ..</h1>
                        <h3> We provide Awesome photography service
                        </h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem</p>
                        <button className="startButton mt-3">Get Started</button>
                    </div>

                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-center feature-img">
                    <img  style ={{height:"400px"}} className="img-fluid rounded-circle " src={Bannerimg} alt="..." />
                </div>

            </div>

        </section>


    );
};

export default Banner;