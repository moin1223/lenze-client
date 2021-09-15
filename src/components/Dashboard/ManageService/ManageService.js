import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';






const ManageService = () => {
    const [services,setServices] = useState([])
    const history = useHistory();


    useEffect(() => {
        fetch('https://blooming-island-74294.herokuapp.com/services')
            .then(res => res.json())
            .then(data =>{
                
               setServices(data)
               
            })
    }, [])



    const handleDelete = (_id) => {
       
        fetch(`https://blooming-island-74294.herokuapp.com/deleteService/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                
            }

            alert('Service is successfully deleted');
            history.replace('/');
        });
    }



    return (

<div className="col-md-8 col-sm-8 col-6 container">
<table className="table">
  <thead>
    <tr>
   
      <th scope="col">Service</th>
      <th scope="col">Description</th>
      <th scope="col">price</th>
      <th></th>
      <th></th>
    </tr>
    </thead>

    <tbody >
    {services.map((service) => (
    <tr  key={service._id}>
  
      <td>{service.title}</td>
      <td>{service.description}</td>
      <td>{service.price}</td>
      <td>
          <Link to={`/dashboard/edit/${service._id}`}>
          <button className="btn btn-success" variant="contained" style={{marginRight:10}} >Edit</button>
          </Link> 
      
      </td>
      
      <td>
      <button className="btn btn-danger" variant="contained" onClick={() =>  handleDelete(service._id)}>Delete</button>
      </td>
    </tr>
         ))}
    </tbody>
    </table>
    </div>
    );
};

export default ManageService;