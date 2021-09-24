import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment.js';

const Booking = () => {
    const { register, handleSubmit} = useForm();
    const user = JSON.parse(localStorage.getItem('user'));
    const [singleService,setSingleService] = useState()
    const history = useHistory();
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://blooming-island-74294.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [id])

    const onSubmit = data => {
        const bookingData = {
            name: data.name,
            email:data.email,
            serviceName:singleService.title,
            price: singleService.price,
            Address:data.Address,
            imageURL: singleService.imageURL

        }
      

        const url = `https://blooming-island-74294.herokuapp.com/addOrder`

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData),
        })
        .then(res => res.json())
        .then(data => {
            alert('Your Order is successfully done')
             history.push('/dashboard/MyOrders');
        })


    };

    return (
        <div className="col-md-8 col-sm-8 col-6 container">
        <h3 className="text-center">Booking</h3>
        <div className="row pt-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-10 form-group mx-auto mt-3">
                    <label><b> Your Name</b></label>
                    <input  {...register("name")} className="form-control"  type="text" value={user.name}/>
                </div>
                
                <div className="col-10 form-group mx-auto mt-3">
                    <label><b>Email</b></label>
                    <input  {...register("email")} className="form-control"  type="text" value={user.email}/>
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label><b>Service</b></label>
                    <input  {...register("serviceName")} className="form-control"  type="text" value={singleService?.title}/>
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label><b>price</b></label>
                    <input  {...register("price")} className="form-control"  type="text" value={singleService?.price}/>
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label>Address </label>
                    <input  {...register("Address")} className="form-control" type="text" placeholder="Adress" />
                </div>
                <div className="col-10 text-center w-100 mt-3">
               < ProcessPayment/>


               </div> 
                <div className="col-10 text-center w-100 mt-3">

                        <button className="w-50" type="submit" class="btn btn-success">Confirm your Order</button>

                    </div>  
            </form>
        </div>
        </div>
    
       
    );
};

export default Booking;