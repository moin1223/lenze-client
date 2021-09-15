import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';






const OrderList = () => {
    const [orders,setOrders] = useState([])
    const history = useHistory();


    useEffect(() => {
        fetch('https://blooming-island-74294.herokuapp.com/Orders')
            .then(res => res.json())
            .then(data =>{
                
                setOrders(data)
               
            })
    }, [])



    const handleDelete = (_id) => {
       
        fetch(`https://blooming-island-74294.herokuapp.com/deleteOrder/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                
            }

            alert('order is successfully deleted');
           
        });
    }



    return (

<div className="container shadow-lg p-3 mb-2  rounded col-md-8 col-sm-12 col-6">
<table className="table">
  <thead>
    <tr>
   
      <th scope="col">Email</th>
      <th scope="col">Service Name</th>
      <th scope="col"> Price</th>
      <th scope="col">Address</th>
      <th scope="col">Status</th>
      <th></th>
    </tr>
    </thead>

    <tbody >
    {orders.map((order) => (
    <tr  key={order._id}>
  
      <td>{order.email}</td>
      <td>{order.serviceName}</td>
      <td>{order.price}</td>
      <td>{order.Address}</td>
      <td>Pending</td>
      <td>
        
     
      <button className="btn btn-danger" variant="contained" onClick={() =>  handleDelete(order._id)}>Delete</button> 
      
      </td>
    </tr>
         ))}
    </tbody>
    </table>
    </div>
    );
};

export default OrderList;