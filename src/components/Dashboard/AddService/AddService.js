import React, { useState } from 'react';

const AddService = () => {
    
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('ServiceName', info.ServiceName);
        formData.append('price', info.price);
        formData.append('ServiceDescription', info.ServiceDescription);

        fetch('https://ancient-scrubland-17514.herokuapp.com/addService', {
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
            {/* <Sidebar></Sidebar> */}
            </div>
        
        <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add Service</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ServiceName</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="ServiceName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="price" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">ServiceDescription</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="ServiceDescription" placeholder="Description" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Upload a image</label>
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
       
    );
};

export default AddService;