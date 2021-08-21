import React, { useEffect, useState } from 'react';
import MySingleOrder from '../MySingleOrder/MySingleOrder';

const MyOrders = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [myCourses, setMyCourses] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/Order/${user.email}`)
            .then(res => res.json())
            .then(data => setMyCourses(data))
    },[user.email])

    return (
        <div className="container">
            
            <div className="row">
            <div className="col-md-4">
                   
                </div>
                {
                myCourses.map(course => <MySingleOrder course={course}></MySingleOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;