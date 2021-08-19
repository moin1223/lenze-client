import React from 'react';
import Birthday from '../../../Asset/images/birthday.jpg'
import Celebreation from '../../../Asset/images/Celebreation.jpg'
import Conferencce from '../../../Asset/images/Conferencce.jpg'
import Convocation from '../../../Asset/images/Convocation.jpg'
import family from '../../../Asset/images/family.jpg'
import wedding from '../../../Asset/images/wedding.jpg'
import Service from '../Service/Service';


const Services = () => {
    const datas =[
        {name:"piya",address:"chittagong",photo:Birthday ,id:'1'},
        {name:"miya",address:"chittagong",photo:Celebreation,id:'2'},
        {name:"ciya",address:"chittagong",photo:Conferencce,id:'3'},
        {name:"giya",address:"chittagong",photo:family,id:'4'},
        {name:"ciya",address:"chittagong",photo:Convocation,id:'5'},
        {name:"giya",address:"chittagong",photo:wedding,id:'4'}

    ]
    return (
        <>
        <section className="container">
        <div className="row">
              {
            datas.map(td=><Service data={td}></Service>)
            }
        </div>

        </section>
        
        </>
      
    );
};

export default Services;