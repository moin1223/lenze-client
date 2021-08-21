import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAdmin = () => {
    
    const [info, setInfo] = useState({});


    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }



    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('Name', info.Name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmins', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

     
  
    return (
        <section className="container-fluid row">
            <div className="col-md-4">
            <Sidebar/>
            </div>
        
        <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Course</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="Name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Email</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="email" />
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
       
    );
};

export default AddAdmin;