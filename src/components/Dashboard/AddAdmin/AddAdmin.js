
import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';





const AddAdmin = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const AdminData = {    
            email: data.email,
            password: data.password,
        }

        const url = `https://blooming-island-74294.herokuapp.com/addAdmin`

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AdminData),
        })
        .then(res => res.json())
        .then(data => {
            alert(' Admin is successfully added')  
             history.push('/dashboard');
        })

    };


    return (
      
        <div className="container shadow-lg p-3 mb-2  rounded col-md-8 col-sm-8 col-6">
        <h3 className="text-center">Add Admin</h3>
        <div className="row pt-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-10 form-group mx-auto mt-3">
                    <label><b>Email</b></label>
                    <input  {...register("email")} className="form-control"  type="text" placeholder="Enter Email" required />
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label><b>Password</b></label>
                    <input  {...register("password")} className="form-control" type="text" placeholder="Enter Password" />
                </div>
                <div className="col-10 text-center w-100 mt-3 mt-3">
                        <button className="w-50" type="submit" class="btn btn-success">submit</button>
                    </div>
            </form>
        </div>
    </div>
        
    );
};

export default AddAdmin;