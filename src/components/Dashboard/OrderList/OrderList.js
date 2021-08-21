import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SingleOrderList from '../SingleOrderList/SingleOrderList';

const OrderList = () => {

    const [admissions, setAdmissions] = useState([]);

    useEffect(() => {
        fetch(`https://ancient-scrubland-17514.herokuapp.com/Orders`)
            .then(res => res.json())
            .then(data =>  setAdmissions(data))
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3 className="m-5 text-center">Order List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Couse Name</th>
                                <th>AllAdmisson Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               admissions.map(add => <SingleOrderList add={add}></SingleOrderList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;