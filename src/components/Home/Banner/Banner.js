import React from 'react';
import Bannerimg from '../../../Asset/images/Banner.jpg'

const Banner = () => {
 
    return (
    
        <section className="container">
            <div className="row">

                <div className="col-md-6 border d-flex justify-content-center align-items-center">
                    <div className="w-50">
                        <h1>hello evrey on <br/>whats up</h1>
                        <p> jajaajsaj ahshavsahvah agahahah hsahsaha sjajsaaj jajaajsaj ahshavsahvah agahahah hsahsaha sjajsaaj
                        </p>
                        <button className="btn btn-success"> by naw</button>
                    </div>

                </div>
                <div className="col-md-6  border d-flex justify-content-center">
                    <img  style ={{height:"400px"}} className="img-fluid" src={Bannerimg} alt="..." />
                </div>

            </div>

        </section>


    );
};

export default Banner;