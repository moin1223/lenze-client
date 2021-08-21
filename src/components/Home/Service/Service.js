import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  
     const service = props.service;
    const {_id,ServiceName,price} = service;


    return (
        <>
  
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="card" style={{width: '18rem'}}>
        <img src={`data:image/png;base64,${service?.image?.img}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ServiceName}</h5>
          <p className="card-text">{price}$</p>
          <div className="d-flex justify-content-between">
          <Link className="text-decoration-none" to={`/serviceDetail/${_id}`}>
          <p className="bookButton ">view more</p>
          </Link>
          <Link className="text-decoration-none" to={`/checkout/${_id}`}>
          <p href="#" className="bookButton">book now</p>
          </Link>
              
          </div>
         
        </div>
      </div>
            
        </div>
       
      </>
    );
};

export default Service;