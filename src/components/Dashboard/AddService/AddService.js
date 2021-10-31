import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddService = () => {

    const { register, handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null)
    const history = useHistory();
    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        }

        const url = `https://blooming-island-74294.herokuapp.com/addService`

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData),
        })
        .then(res => res.json())
        .then(data => {
            alert('Service is successfully added')
            history.push('/')
        })

    };

    const handleImageUpload = event => {

        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a8630a61c226e1cd5552e6018232a737');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    return (

        <div className="container shadow-lg p-3 mb-2  rounded col-md-8 col-sm-8 col-6">
            <h3 className="text-center">Add Service</h3>
            <div className="row pt-3 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-10 form-group mx-auto">
                        <label className="mb-1"><b>Service Title</b></label>
                        <input  {...register("title")} className="form-control" type="text" placeholder="Enter title" />
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Service Price</b></label>
                        <input  {...register("price")} className="form-control" type="text" placeholder="Enter price" />
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Description</b></label>
                        <textarea  {...register("description")} rows="5" className="form-control" type="text" placeholder="Enter Description" />
                    </div>
                    <div className="col-10 form-group mx-auto mt-3">
                        <label className="mb-1"><b>Upload Image</b></label><br />
                        <input type="file" onChange={handleImageUpload} />
                    </div>
                    <div className="col-10 text-center w-100 mt-3">

                        <button className="w-50" type="submit" class="btn btn-success">Add Service</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;