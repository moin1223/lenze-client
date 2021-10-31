  
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css"

import Slider from "react-slick"
import SingleCard from '../Review/Review';


const Reviews = () => {
    const [allReview,setAllReview] = useState([])
    console.log(allReview)

    var settings = {
        
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      useEffect(() => {
          fetch('https://blooming-island-74294.herokuapp.com/Reviews')
              .then(res => res.json())
              .then(data =>{
                  
                setAllReview(data)
                 
              })
      }, [])
  
    return (
      
      
           <div className="mt-5 ms-3 reviews">
               <h1 className="mb-5 mt-5 text-center"> Our Testimonial</h1>
    
    <Slider {...settings}>
       
      

      {
          allReview.map(td=><SingleCard data={td}></SingleCard>)
      }
            </Slider>
        

        
    </div>
    
    
  

    );
};

export default Reviews ;