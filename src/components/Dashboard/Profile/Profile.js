import React from 'react';
import './Prifile.css'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="container  rounded col-md-8 col-sm-8 col-6">
           <div class="cards" style={{ width: '18rem' }}>


<div class="card-body">
    <img src={user.img} width='80px' height='80px' class=" rounded-circle mx-auto d-block" alt="..." />

    <p class="card-text text-center mt-2">{user.name}</p>  <p class="card-text text-center mt-2"><b>email:{user.email}</b></p>
 
</div>
</div>           
        </div>
    );
};

export default Profile;