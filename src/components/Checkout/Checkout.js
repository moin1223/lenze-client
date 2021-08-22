import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Checkout = () => {

    const { _id } = useParams();
    const history = useHistory();
    const [service, setService] = useState({});
    const user = JSON.parse(localStorage.getItem('user'));
    const [registrationData, setRegistrationData] = useState({
        userName: user.name,
        email: user.email,
    })

    const handleDateChange = (e) => {
        const newRegistrationData = { ...registrationData };
        newRegistrationData.date = e.target.value;
        setRegistrationData(newRegistrationData);
    }

    const handleChange = (e) => {
        const newRegistrationData = { ...registrationData };
        newRegistrationData.address = e.target.value;
        newRegistrationData.Phone = e.target.value;
        setRegistrationData(newRegistrationData);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (registrationData.date) {

        fetch('https://ancient-scrubland-17514.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registrationData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your registration is successfully done')
                history.replace('/');
            })
    }
    // else {
    //     alert('Please select date')
    // }
    // }

    useEffect(() => {
        fetch(`https://ancient-scrubland-17514.herokuapp.com/service/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                const newRegistrationData = { ...registrationData }
                newRegistrationData.serviceName = data.ServiceName
                newRegistrationData.servicePrice = data.price
                newRegistrationData.img = data.img
                setRegistrationData(newRegistrationData)
            })
    }, [_id, registrationData])

    return (
        <div className="container border m-5 p-5 ">

            <form className="" onSubmit={handleSubmit}>
                <h3 className="text-center">Comfirm Your Order</h3>
                <input className="form-label" type="text" name="userName" placeholder="userName" value={user?.name} /> <br /><br />
                <input type="text" name="eventName" placeholder="eventName" value={service.ServiceName} /> <br /><br />
                <input type="text" name="price" value={service.price} placeholder="Description" /> <br /><br />
                <input type="text" onChange={handleChange} name="address" placeholder="Address" /> <br /><br />
                <input type="text" onChange={handleChange} name="Phone" placeholder="Phone Numver" /> <br /><br />
                <input type="date" onChange={handleDateChange} name="date" /> <br /><br />
                <button className="bookButton">Submit</button>
            </form>

        </div>
    


    );
};

export default Checkout;