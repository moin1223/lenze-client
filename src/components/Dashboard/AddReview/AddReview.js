import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddReview = () => {

    const { register, handleSubmit} = useForm();
    const user = JSON.parse(localStorage.getItem('user'));
    const history = useHistory();

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            Address: data.Address,
            description: data.description,
            imageURL: user.img
        }

        const url = `https://blooming-island-74294.herokuapp.com/addReview`

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Review is successfully added')
                history.push('/')
            })

    };

    return (

        <div className="container shadow-lg p-3 mb-2  rounded col-md-8 col-sm-8 col-6">
            <h3 className="text-center">Add Review</h3>
            <div className="row pt-3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-10 form-group mx-auto">
                        <label className="mb-1"><b>Name</b></label>
                        <input  {...register("name")} className="form-control" type="text" value={user?.name} />
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Address</b></label>
                        <input  {...register("Address")} className="form-control" type="text" placeholder="Adress" />
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Description</b></label>
                        <textarea  {...register("description")} rows="5" className="form-control" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="col-10 text-center w-100 mt-3 mt-3">
                        <button className="w-50" type="submit" class="btn btn-success">submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddReview;