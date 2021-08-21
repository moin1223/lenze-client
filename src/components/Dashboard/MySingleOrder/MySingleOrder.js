import React from 'react';
import { useHistory } from 'react-router';


const MySingleOrder = (props) => {
    console.log(props)

    const course = props.course;
    const { _id, userName, courseName, date, img} = course;
    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://ancient-scrubland-17514.herokuapp.com/deleteOrder/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            alert('Your registration is successfully deleted');
            history.replace('/');
        });
    }

    return (
        <div className="col-md-6">
            <div className="d-flex justify-content-between shadow p-5">
                <div className="mb-5 ms-5 me-5">
                    <img className="img-fluid" src={`data:image/png;base64,${course?.image?.img}`}alt=""/>
                </div>
                <div>
                    <h3>{userName}</h3>
                    <h4>Course: {courseName}</h4>
                    <h5>Date: {date}</h5>
                    <button onClick={handleDelete} className="btn btn-danger">Cancel Cancle</button>
                    <button  className="btn btn-danger ms-5">Pending</button>
                </div>
            </div>
        </div>
    );
};

export default MySingleOrder;