import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Service from '../Service/Service'



const Services = () => {
    // const [allService,setAllSerVice] = useState([]);
    const [allService,setAllSerVice] = useContext(UserContext);

    useEffect( () => {
        fetch('http://localhost:5000/Services')
        .then(res => res.json())
        .then(data =>setAllSerVice(data))
    },[])
    
    return (
        <>
        <section className="container border">
        <div className="row">
              {
            allService.map(service=><Service service={service} key={ service._id} ></Service>)
            
            }
        </div>

        </section>
        
        </>
      
    );
};

export default Services;