import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

const UpdateService = () => {
    const [singleService,setSingleService] = useState()
    const {id} = useParams()
    const history = useHistory()
    const { register, handleSubmit} = useForm();
    const [imageURL, setIMageURL] = useState(null)

    useEffect(() => {
        fetch(`https://blooming-island-74294.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [id])


    const onSubmit = data => {
        const serviceData = {
          
            title: data.title,
            description: data.description,
            price: data.price,
            imageURL: imageURL

        }

        const url = `https://blooming-island-74294.herokuapp.com/update/${id}`

        fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData),
        })
        .then(res => res.json())
        .then(data => {
            alert('Your Service is successfully updated')
            history.replace('/');
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
        <h3 className="text-center">Update Service</h3>
        <div className="row pt-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-10 form-group mx-auto mt-3">
                    <label className="mb-1"><b>Service Title</b></label>
                    <input  {...register("title")} className="form-control" defaultValue= {singleService?.title} type="text" placeholder="Enter title" />
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label className="mb-1"><b>Service Price</b></label>
                    <input  {...register("price")} className="form-control"defaultValue= {singleService?.price} placeholder="Enter price" />
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label className="mb-1"><b>Description</b></label>
                    <textarea  {...register("description")}  rows="5" className="form-control" defaultValue= {singleService?.description} type="text" placeholder="Enter Description" />
                </div>
                <div className="col-10 form-group mx-auto mt-3">
                    <label className="mb-1"><b>Upload Image</b></label><br />
                    <input type="file" onChange={handleImageUpload}  />
                </div>
                <div className="col-10 text-center w-100 mt-3">
                        <button className="w-50" type="submit" class="btn btn-success">Update Service</button>
                    </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateService;