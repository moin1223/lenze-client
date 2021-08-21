
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    },[user.email])
    
    return (

        <div className="m-5 p-5">
           {  isAdmin &&
            <>
         
                 <Link to='/addAdmin'><h3>OrderList</h3></Link>
                <Link to='/orderList'><h3>OrderList</h3></Link>
                <Link to="/addService"><h3>Add Service</h3></Link>
             </>
        }
            
            <Link to="/myOrder"><h3>Your Order</h3></Link>
            
            
        </div>

    );
};

export default Sidebar;