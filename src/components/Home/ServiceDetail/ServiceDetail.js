import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceDetail = () => {
    const [allService,setAllSerVice] = useContext(UserContext);
    const {_id} = useParams ();
    const service=allService.find(td=>td._id==_id);
    console.log(service?.ServiceName)
    return (
         
    <div className="d-flex justify-content-center">
       <div className="card mb-3 mt-5 " style={{width: '18rem'}}>
  <img src={`data:image/png;base64,${service?.image?.img}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{service?.ServiceName}</h5>
    <p className="card-text">{service?.ServiceDescription}</p>
   
  </div>
  </div>
  </div>
    
    );
};

export default ServiceDetail;