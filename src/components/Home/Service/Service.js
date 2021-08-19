import React from 'react';
import './Service.css'

const Service = (props) => {
  
    const {name,photo}=props.data
    console.log(photo)


    return (
        <>
  
        <div className="col-md-4">
        <div className="card" style={{width: '18rem'}}>
        <img src={photo} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between">
          <a href="#" className="bookButton">Go somewhere</a>
          <a href="#" className="bookButton">Go somewhere</a>
              
          </div>
         
        </div>
      </div>
            
        </div>
       
      </>
    );
};

export default Service;