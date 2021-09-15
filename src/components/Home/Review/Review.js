import React from 'react';



const Review = (props) => {

    const { name,Address, description,imageURL } = props.data





    return (


        <>

            <div class="card ms-5 shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>


                <div class="card-body">
                    <img src={imageURL} width='80px' height='80px' class=" rounded-circle mx-auto d-block" alt="..." />


                    <p class="card-text text-center mt-2 text-danger"><b>{name}</b></p>
                    <p class="card-text text-center mt-2"><b>{Address}</b></p>
                    <p class="card-text text-center mt-4 text-muted">{description}</p>
                </div>
            </div>



        </>

    );
};

export default Review;