
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://ancient-scrubland-17514.herokuapp.com/isAdmin', {
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
         
                 <Link className="text-decoration-none" to='/addAdmin'><h3>Add Admin</h3></Link>
                <Link className="text-decoration-none" to='/orderList'><h3>OrderList</h3></Link>
                <Link className="text-decoration-none" to="/addService"><h3>Add Service</h3></Link>
             </>
        } 
            
            <Link className="text-decoration-none" to="/myOrder"><h3>Your Order</h3></Link>
            
            
        </div>

    );
};

export default Sidebar;