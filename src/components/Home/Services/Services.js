import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import Service from '../Service/Service'

const Services = () => {
    const [allService, setAllSerVice] = useContext(UserContext);

    useEffect(() => {
        fetch('https://blooming-island-74294.herokuapp.com/services')
            .then(res => res.json())
            .then(data =>{
                setAllSerVice(data)
               
            })
    }, [(setAllSerVice)])

    return (
        <>
             <div className="custom-container mt-4 pt-4">
            <h1 style={{fontWeight: '700'}} className="m-5 text-center"><span style={{color: '#171B4E'}}>Provide awesome</span> <span style={{color: '#7AB259'}}>services</span></h1>
            { allService.length > 0 ?
                <div className="row">
                    {
                         allService.map(service => <Service service={service} key={service._id} />)
                    }
                </div>
                : <div className="text-center">
                    <h1>Loading...</h1>
                    <img className="img-fuid" src="https://i.ibb.co/kBnQx2n/200.gif" alt=""/>
                </div>
            }
        </div>

        </>

    );
};

export default Services;