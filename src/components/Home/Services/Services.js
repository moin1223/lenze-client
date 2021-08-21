import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import Service from '../Service/Service'



const Services = () => {
    const [allService, setAllSerVice] = useContext(UserContext);

    useEffect(() => {
        fetch('https://ancient-scrubland-17514.herokuapp.com/Services')
            .then(res => res.json())
            .then(data => setAllSerVice(data))
    })

    return (
        <>
            <section className="container border">
                <div className="row">
                    {
                        allService.map(service => <Service service={service} key={service._id} ></Service>)

                    }
                </div>

            </section>

        </>

    );
};

export default Services;