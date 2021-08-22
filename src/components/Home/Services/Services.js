import React, { useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../App';
import Service from '../Service/Service'
import spinner from '../../../Asset/images/spinner.jpg'



const Services = () => {
    const [allService, setAllSerVice] = useContext(UserContext);
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        fetch('https://ancient-scrubland-17514.herokuapp.com/Services')
            .then(res => res.json())
            .then(data =>{
                setAllSerVice(data)
                setLoading(false)
            })
    }, [(setAllSerVice)])

    return (
        <>
            <section className="container mt-5 mb-5">
                <div className="row">
                    <h1 className="text-center mb-5 mt-5 p-3">Our Awesome Services</h1>
                    
                    {
                        loading ? <img src={spinner} alt="..." className="text-center mb-5 mt-5 p-3"/> :
                        allService.map(service => <Service service={service} key={service._id} ></Service>)

                    }
                </div>

            </section>

        </>

    );
};

export default Services;